gcloud version || true
if [ ! -d "$HOME/google-cloud-sdk/bin" ]; then rm -rf $HOME/google-cloud-sdk; export CLOUDSDK_CORE_DISABLE_PROMPTS=1; curl https://sdk.cloud.google.com | bash; fi
source /home/travis/google-cloud-sdk/path.bash.inc
openssl aes-256-cbc -K $encrypted_a6a92fda07a4_key -iv $encrypted_a6a92fda07a4_iv -in credentials.tar.gz.enc -out credentials.tar.gz -d
gcloud version
gcloud -q components install app-engine-java
tar -xzf credentials.tar.gz
gcloud auth activate-service-account --key-file client-secret.json
gcloud config set project rmit-doughnuts
gcloud components install kubectl
gcloud auth configure-docker
