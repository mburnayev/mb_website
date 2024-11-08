pipeline {
    agent any
    environment {
        GITHUB_CREDENTIALS = credentials("github_creds")
        DOCKERHUB_CREDENTIALS = credentials("dockerhub_creds")
    }
    stages {
        stage("Build image from Dockerfile") {
            steps {
                git branch: "main", credentialsId: "github_creds", url: "https://github.com/mburnayev/mb_website"
                sh "docker build -t mooobert/mb_website:${BUILD_NUMBER} ."
            }
        }
        stage("Push to DockerHub") {
            steps {
                sh "docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW docker.io"
                sh "docker push mooobert/mb_website:${BUILD_NUMBER}"
            }
        }
    }
}