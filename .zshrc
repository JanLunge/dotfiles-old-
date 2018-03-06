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

alias sshvserver="ssh jan@heaper.de"
alias wstore="ssh jan@wstore.ddns.net"


export GOPATH=$HOME/Go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin

#maintainance
alias chmoddir="find . -type d -name \* -exec chmod 775 {} \;"
alias chmodfiles="find . -type f -exec chmod 644 {} \;"

#sudo
alias fuck='sudo $(fc -ln -1)'
alias _='sudo'
alias please='sudo'

#art
function rusto {
    figlet -f rusto $1 | lolcat
}
function rustofat {
    figlet -f rustofat $1 | lolcat
}
function slant {
    figlet -f slant $1 | lolcat
}
function cyberlg {
    figlet -f cyberlarge $1 | lolcat
}
function cybermd {
    figlet -f cybermedium $1 | lolcat
}
function cybersm {
    figlet -f cybersmall $1 | lolcat
}
function drpepper {
    figlet -f drpepper $1 | lolcat
}
function small {
    figlet -f small $1 | lolcat	
}
function lolt {
    figlet -f $1 $2 | lolcat	
}
#isometric1 -4
#poison
#rectangles
#rozzo
#smisome1
#stampatello
#colossal
#chunky

#git
alias ga="git add"
alias gam="git ls-files --modified | xargs git add"
alias gc="git commit -m"
alias gs="git status"
alias gd="git diff"
alias gf="git fetch"
alias gm="git merge"
alias gr="git rebase"
alias gp="git push"
alias gpl="git pull"
alias gu="git unstage"
alias gg="git graph"
alias gco="git checkout"
alias glog="git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"


#finder
alias hide='chflags hidden'
alias unhide='chflags nohidden'
#create dir and enter it
function mkd() {
	mkdir -p "$@" && cd "$_";
}
# Change working directory to the top-most Finder window location
function cdf() { # short for `cdfinder`
	cd "$(osascript -e 'tell app "Finder" to POSIX path of (insertion location as alias)')";
}
# `v` with no arguments opens the current directory in Vim, otherwise opens the
# given location
function c() {
	if [ $# -eq 0 ]; then
		code .;
	else
		code "$@";
	fi;
}

#bookmarks
function cdvn() {
	cd ~/Code/MyVan/
	slant 'MyVan'
}


slant 'hello Jan'