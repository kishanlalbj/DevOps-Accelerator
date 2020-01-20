pipeline {
    
    agent {
        label "linux"
    }

    stages {
        stage("Checkout") {
            steps {
                echo "Checkout"
            }
        }

        stage("Install NPM Dependencies") {
            steps {
                echo "Install NPM Dependencies"
            }
        }

         stage("Build") {
            steps {
                echo "Build React"
            }
        }

        stage("Tests") {
            steps {
                echo "Mocha and Chai Tests"
            }
        }

        stage("Code Quality") {
            steps {
                echo "Code Quality"
            }
        }
       
        stage("Deploy to DEV") {
            steps {
                echo "Deploy to DEV"
            }
        }
        } 
    }

    post {
        always {
            echo "NOTIFY DEV TEAM"
            cleanWs()
        }
    }
}