export const ldapSecuritySlides = [
  {
    title: "What is LDAP?",
    points: [
      "✔️ Lightweight Directory Access Protocol",
      "Centralized directory service for authentication",
      "Stores user accounts, groups, organizational data",
      "🔥 Enterprise standard for user management"
    ],
    note: "🧠 LDAP = Directory service + Authentication + Authorization"
  },
  {
    title: "LDAP vs Database Auth",
    points: [
      "```table",
      "Aspect | Database Auth | LDAP Auth",
      "Storage | App database | Central directory",
      "Management | Per application | Centralized",
      "Integration | Single app | Multiple systems",
      "Enterprise | Limited | Standard",
      "Scalability | App-specific | Organization-wide",
      "```"
    ]
  },
  {
    title: "Spring Security LDAP Setup",
    points: [
      "Add dependencies:",
      "```xml",
      "<dependency>",
      "    <groupId>org.springframework.boot</groupId>",
      "    <artifactId>spring-boot-starter-security</artifactId>",
      "</dependency>",
      "<dependency>",
      "    <groupId>org.springframework.ldap</groupId>",
      "    <artifactId>spring-ldap-core</artifactId>",
      "</dependency>",
      "<dependency>",
      "    <groupId>org.springframework.security</groupId>",
      "    <artifactId>spring-security-ldap</artifactId>",
      "</dependency>",
      "```"
    ]
  },
  {
    title: "LDAP Configuration",
    points: [
      "```yaml",
      "spring:",
      "  ldap:",
      "    urls: ldap://localhost:389",
      "    base: dc=example,dc=com",
      "    username: cn=admin,dc=example,dc=com",
      "    password: admin",
      "    user:",
      "      dn-pattern: uid={0},ou=people",
      "      search-base: ou=people",
      "      search-filter: (uid={0})",
      "    group:",
      "      search-base: ou=groups",
      "      search-filter: member={0}",
      "```"
    ]
  },
  {
    title: "Security Configuration",
    points: [
      "```java",
      "@Configuration",
      "@EnableWebSecurity",
      "public class LdapSecurityConfig {",
      "    ",
      "    @Bean",
      "    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {",
      "        return http",
      "            .authorizeHttpRequests(auth -> auth",
      "                .requestMatchers(\"/public/**\").permitAll()",
      "                .anyRequest().authenticated()",
      "            )",
      "            .formLogin(Customizer.withDefaults())",
      "            .build();",
      "    }",
      "}",
      "```"
    ]
  },
  {
    title: "LDAP Authentication Manager",
    points: [
      "```java",
      "@Bean",
      "public AuthenticationManager authManager(BaseLdapPathContextSource source) {",
      "    LdapAuthenticationProviderConfigurer<AuthenticationManagerBuilder> ldapAuth = ",
      "        new AuthenticationManagerBuilder(objectPostProcessor)",
      "            .ldapAuthentication()",
      "            .userDnPatterns(\"uid={0},ou=people\")",
      "            .groupSearchBase(\"ou=groups\")",
      "            .contextSource(source);",
      "    ",
      "    return ldapAuth.and().build();",
      "}",
      "```"
    ]
  },
  {
    title: "Custom LDAP Context Source",
    points: [
      "```java",
      "@Bean",
      "public LdapContextSource contextSource() {",
      "    LdapContextSource contextSource = new LdapContextSource();",
      "    contextSource.setUrl(\"ldap://ldap.example.com:389\");",
      "    contextSource.setBase(\"dc=example,dc=com\");",
      "    contextSource.setUserDn(\"cn=admin,dc=example,dc=com\");",
      "    contextSource.setPassword(\"adminpass\");",
      "    return contextSource;",
      "}",
      "```"
    ]
  },
  {
    title: "LDAP User Details Service",
    points: [
      "```java",
      "@Service",
      "public class LdapUserDetailsService implements UserDetailsService {",
      "    ",
      "    @Autowired",
      "    private LdapTemplate ldapTemplate;",
      "    ",
      "    @Override",
      "    public UserDetails loadUserByUsername(String username) {",
      "        return ldapTemplate.searchForObject(",
      "            query().where(\"uid\").is(username),",
      "            new PersonContextMapper()",
      "        );",
      "    }",
      "}",
      "```"
    ]
  },
  {
    title: "Role Mapping from LDAP Groups",
    points: [
      "```java",
      "@Bean",
      "public LdapAuthoritiesPopulator authoritiesPopulator() {",
      "    DefaultLdapAuthoritiesPopulator populator = ",
      "        new DefaultLdapAuthoritiesPopulator(contextSource(), \"ou=groups\");",
      "    populator.setGroupSearchFilter(\"member={0}\");",
      "    populator.setRolePrefix(\"ROLE_\");",
      "    populator.setSearchSubtree(true);",
      "    return populator;",
      "}",
      "```",
      "🔥 Maps LDAP groups to Spring Security roles"
    ]
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use connection pooling for performance",
      "✅ Implement proper error handling",
      "✅ Cache user details when possible",
      "✅ Use secure LDAP (LDAPS) in production",
      "✅ Configure proper timeouts",
      "❌ Don't hardcode LDAP credentials",
      "❌ Don't ignore SSL certificate validation",
      "❌ Don't fetch all user attributes unnecessarily"
    ],
    note: "🧠 Interview tip: LDAP enables enterprise SSO and centralized user management"
  }
];