FROM openjdk:8-jdk-alpine as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# CACHE DEPENDENCIES IF POSSIBLE
RUN --mount=type=cache,target=/root/.m2 ./mvnw install -DskipTests
WORKDIR /workspace/app/target/dependency
# UNPACK JAR TO BE ABLE TO CACHE COPYING DEPENDENCIES IN NEXT STEP
RUN jar -xf ../*.jar

FROM openjdk:8-jdk-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
# LOTS OF STUFF IS FLAGS THAT SHOULD INCREASE STARTUP PERFORMANCE
# THE MAGIC HAPPENS IN THE CP FLAG WHERE WE DEFINE THE app and app/lib/* as class paths
# AND THE LAST PARAM WHERE WE DEFINE THE ENTRY POINT AS OUR TrainMeBeApplication file that spins up our Spring Boot Server
ENTRYPOINT ["java","-noverify","-XX:TieredStopAtLevel=1","-cp","app:app/lib/*","-Dspring.main.lazy-initialization=true","com.goetzrobin.trainmebe.TrainMeBeApplication"]