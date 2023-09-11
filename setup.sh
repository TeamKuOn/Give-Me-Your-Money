curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
npm ci  #package-lock.json
npm run build index.html
npm install -g http-server