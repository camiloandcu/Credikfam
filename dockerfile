FROM openjdk:22-jdk
COPY backend/target/credikfam-0.0.1-SNAPSHOT.jar credikfam.jar
ENTRYPOINT ["java", "-jar", "credikfam.jar"]