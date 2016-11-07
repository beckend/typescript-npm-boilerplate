# Install zsh
apt-get install zsh -y

# Install prezto
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

# Set zsh as default
chsh -s /bin/zsh
