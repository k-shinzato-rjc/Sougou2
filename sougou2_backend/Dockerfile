# MavenとJava 21を使用
FROM maven:3.9-eclipse-temurin-21
WORKDIR /app

# ソースコードをマウントするための設定
# 実行時には docker-compose の volumes で同期します
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005'"]