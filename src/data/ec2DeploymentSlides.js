export const ec2DeploymentSlides = [
  {
    title: "What is EC2?",
    points: [
      "✔️ Elastic Compute Cloud - virtual servers in AWS",
      "Scalable computing capacity in the cloud",
      "Pay-as-you-go pricing model",
      "🔥 Most popular AWS service for hosting applications"
    ],
    note: "🧠 EC2 = Virtual Machine + AWS infrastructure management"
  },
  {
    title: "EC2 Instance Types",
    points: [
      "```table",
      "Type | Use Case | Example",
      "t3.micro | Low traffic apps | Free tier eligible",
      "t3.small | Small web apps | Development/testing",
      "m5.large | General purpose | Production web apps",
      "c5.xlarge | CPU intensive | High-performance computing",
      "```"
    ]
  },
  {
    title: "Launching EC2 Instance",
    points: [
      "1. Choose AMI (Amazon Machine Image)",
      "2. Select instance type (t3.micro for free tier)",
      "3. Configure security groups (firewall rules)",
      "4. Create/select key pair for SSH access",
      "5. Launch instance",
      "🔥 Use Amazon Linux 2 AMI for best AWS integration"
    ]
  },
  {
    title: "Security Groups Setup",
    points: [
      "Acts as virtual firewall for EC2 instances",
      "```table",
      "Port | Protocol | Source | Purpose",
      "22 | SSH | Your IP | Remote access",
      "80 | HTTP | 0.0.0.0/0 | Web traffic",
      "443 | HTTPS | 0.0.0.0/0 | Secure web traffic",
      "8080 | Custom | 0.0.0.0/0 | Spring Boot app",
      "```"
    ]
  },
  {
    title: "Connecting to EC2",
    points: [
      "SSH using key pair:",
      "```bash",
      "ssh -i \"your-key.pem\" ec2-user@your-instance-ip",
      "```",
      "Windows users: Use PuTTY or WSL",
      "🔥 Keep .pem file secure (chmod 400)"
    ]
  },
  {
    title: "Installing Java on EC2",
    points: [
      "```bash",
      "# Update system",
      "sudo yum update -y",
      "",
      "# Install Java 17",
      "sudo yum install java-17-amazon-corretto -y",
      "",
      "# Verify installation",
      "java -version",
      "```"
    ]
  },
  {
    title: "Deploying Spring Boot App",
    points: [
      "1. Build JAR file locally: `mvn clean package`",
      "2. Copy JAR to EC2:",
      "```bash",
      "scp -i \"key.pem\" app.jar ec2-user@ip:/home/ec2-user/",
      "```",
      "3. Run application:",
      "```bash",
      "java -jar app.jar",
      "```",
      "🔥 Use `nohup` to run in background"
    ]
  },
  {
    title: "Running App as Service",
    points: [
      "Create systemd service file:",
      "```bash",
      "sudo nano /etc/systemd/system/myapp.service",
      "```",
      "Service configuration:",
      "```",
      "[Unit]",
      "Description=My Spring Boot App",
      "",
      "[Service]",
      "User=ec2-user",
      "ExecStart=/usr/bin/java -jar /home/ec2-user/app.jar",
      "Restart=always",
      "",
      "[Install]",
      "WantedBy=multi-user.target",
      "```"
    ]
  },
  {
    title: "Managing the Service",
    points: [
      "```bash",
      "# Enable and start service",
      "sudo systemctl enable myapp",
      "sudo systemctl start myapp",
      "",
      "# Check status",
      "sudo systemctl status myapp",
      "",
      "# View logs",
      "sudo journalctl -u myapp -f",
      "```"
    ]
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use Elastic IP for static IP address",
      "✅ Set up CloudWatch monitoring",
      "✅ Configure auto-scaling groups",
      "✅ Use Application Load Balancer",
      "✅ Regular backups with AMI snapshots",
      "❌ Don't hardcode credentials in code",
      "❌ Don't leave unused instances running"
    ],
    note: "🧠 Interview tip: Mention cost optimization and security best practices"
  }
];