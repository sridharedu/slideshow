export const kafkaSlides = [
  {
    title: "What is Apache Kafka?",
    points: [
      "✔️ Distributed streaming platform",
      "Handles high-throughput, fault-tolerant data feeds",
      "Used for building real-time data pipelines and streaming applications",
      "🔥 Originally developed by LinkedIn, now open-source"
    ],
    keepInMind: "Kafka is not just a message queue; it's a distributed commit log."
  },
  {
    title: "Kafka Core Concepts",
    points: [
      "**Producer**: Publishes records to Kafka topics.",
      "**Consumer**: Subscribes to topics and processes records.",
      "**Broker**: Kafka server that stores data.",
      "**Topic**: Category/feed name to which records are published.",
      "**Partition**: Topics are divided into partitions for scalability and parallelism.",
      "🔥 Understanding these roles is key to Kafka's architecture."
    ],
    keepInMind: "Partitions are the unit of parallelism in Kafka, enabling high throughput."
  },
  {
    title: "Kafka Architecture Overview",
    points: [
      "```mermaid",
      "graph TD",
      "    Producer --> Broker1",
      "    Producer --> Broker2",
      "    Broker1 --> ConsumerGroup",
      "    Broker2 --> ConsumerGroup",
      "    subgraph Kafka Cluster",
      "        Broker1",
      "        Broker2",
      "        Broker3",
      "    end",
      "    Broker1 -- Replicates to --> Broker3",
      "    ConsumerGroup -- Consumes from --> Broker1",
      "    ConsumerGroup -- Consumes from --> Broker2",
      "```",
      "✔️ Distributed, fault-tolerant, and scalable design",
      "Brokers form a cluster, managed by ZooKeeper (or KRaft)",
      "Producers write to leaders, consumers read from followers"
    ],
    keepInMind: "Kafka's distributed nature provides high availability and durability."
  },
  {
    title: "Topics and Partitions",
    points: [
      "**Topic**: A logical channel for a stream of records.",
      "**Partition**: An ordered, immutable sequence of records within a topic.",
      "Records in a partition are assigned a sequential ID number called an `offset`.",
      "✔️ Each partition is an ordered, append-only commit log.",
      "🔥 More partitions = more parallelism, but also more overhead."
    ],
    keepInMind: "The order of messages is guaranteed only within a single partition."
  },
  {
    title: "Producers - Sending Messages",
    points: [
      "```java",
      "Properties props = new Properties();",
      "props.put(\"bootstrap.servers\", \"localhost:9092\");",
      "props.put(\"key.serializer\", \"org.apache.kafka.common.serialization.StringSerializer\");",
      "props.put(\"value.serializer\", \"org.apache.kafka.common.serialization.StringSerializer\");",
      "",
      "Producer<String, String> producer = new KafkaProducer<>(props);",
      "producer.send(new ProducerRecord<String, String>(\"my-topic\", \"key\", \"value\"));",
      "producer.close();",
      "```",
      "✔️ Producers write data to topics, optionally with a key for partitioning.",
      "Asynchronous send with callbacks for acknowledgements."
    ],
    keepInMind: "Messages with the same key are always sent to the same partition, ensuring order."
  }
];