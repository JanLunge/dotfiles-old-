export ZSH=$HOME/.oh-my-zsh
ZSH_THEME=geometry/geometry
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/jan/.composer/vendor/bin"
# # export MANPATH="/usr/local/man:$MANPATH"
#
source $ZSH/oh-my-zsh.sh
#
# # You may need to manually set your language environment
# # export LANG=en_US.UTF-8
#
# # Preferred editor for local and remote sessions
# # if [[ -n $SSH_CONNECTION ]]; then
# #   export EDITOR='vim'
# # else
# #   export EDITOR='mvim'
# # fi
#
# # Compilation flags
# # export ARCHFLAGS="-arch x86_64"
#
# # ssh
# # export SSH_KEY_PATH="~/.ssh/dsa_id"
#
# # Set personal aliases, overriding those provided by oh-my-zsh libs,
# # plugins, and themes. Aliases can be placed here, though oh-my-zsh
# # users are encouraged to define aliases within the ZSH_CUSTOM folder.
# # For a full list of active aliases, run `alias`.
# #
# # Example aliases
alias zshconfig="open ~/.zshrc"
alias settings="open ~/.bash_profile"
alias ohmyzsh="open ~/.oh-my-zsh"
#
alias meminfo='free -m -l -t'
alias vm="ssh vagrant@127.0.0.1 -p 2222"
alias web='cd ~/Documents/Web/Homestead/'
alias mamphp='/Applications/MAMP/bin/php/php5.4.34/bin/php'
#
alias hide='chflags hidden'
alias unhide='chflags nohidden'
export PATH="$PATH:~/.composer/vendor/bin:/Applications/MAMP/bin"
#
#
alias vmup='homestead up'
alias vmdown='homestead halt'
#
alias sound_on='curl "https://autoremotejoaomgcd.appspot.com/sendmessage?key=APA91bEWryEme7IQsNMHCkwt9ChsAs0NR23z-Jkch30cFTMek1ZpFOSwpM-RCubopmdA0tchbBCaz8pwx56D__3gJugV_SUW-RFgJ7VsO8DZB158WkOVdXrniyVtQrJIinE8_WoQPOCm&message=s&ttl=5"'
#
#
# # Super user
alias _='sudo'
alias please='sudo'
alias fuck='sudo $(fc -ln -1)'
alias giveafuck='curl -s http://rage.metroserve.me/?format=plain'
export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/jan/.composer/vendor/bin:~/.composer/vendor/bin:/Applications/MAMP/bin:/Applications/clojure”
#
alias sshvserver="ssh jan@heaper.de"
alias sshwras="ssh pi@192.168.0.17"
alias sshwprint="ssh pi@192.168.0.52"
alias sshwdesk="ssh jan@192.168.0.28"
alias pi="ssh pi@lunge.ddns.net -p 3390"
alias adjlayer="sh $HOME/Scripts/AdjLayerHeight.sh"
#
export GOPATH=$HOME/Go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin

#export DYLD_FORCE_FLAT_NAMESPACE=1
#export DYLD_INSERT_LIBRARIES=/usr/local/Cellar/libfaketime/0.9.5/lib/faketime/libfaketime.1.dylib
#export FAKETIME="@2017-09-05 20:30:00"

alias chmoddir="find . -type d -name \* -exec chmod 775 {} \;"
alias chmodfiles="find . -type f -exec chmod 644 {} \;"
