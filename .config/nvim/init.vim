" Plug 'terryma/vim-multiple-cursors'
call plug#begin('~/.config/nvim/plugged')
Plug 'https://github.com/junegunn/vim-github-dashboard.git'
Plug 'scrooloose/nerdtree'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-commentary'
Plug 'morhetz/gruvbox'
Plug 'Valloric/YouCompleteMe'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'joedicastro/vim-molokai256'
Plug 'vimwiki/vimwiki'
call plug#end()
colorscheme molokai256
set mouse=a
set number		" show line numbers
set relativenumber 	" show relativ eline numbers
set cursorline
set nocompatible
filetype plugin on


" nerdtree config
nnoremap <C-m> :NERDTreeToggle<CR>
" Show hidden files by default.
let NERDTreeShowHidden = 1
let g:NERDTreeQuitOnOpen = 1

" airline settings
let g:airline#extensions#tabline#enabled = 2
let g:airline#extensions#tabline#fnamemod = ':t'
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline#extensions#tabline#right_sep = ' '
let g:airline#extensions#tabline#right_alt_sep = '|'
let g:airline_powerline_fonts=1
let g:airline_left_sep = ' '
let g:airline_left_alt_sep = '|'
let g:airline_right_sep = ' '
let g:airline_right_alt_sep = '|'
let g:airline_powerline_fonts=1
let g:airline_theme='minimalist'

" Multicursor
let g:multi_cursor_use_default_mapping=0
let g:multi_cursor_next_key='<C-e>'
let g:multi_cursor_quit_key='<Esc>'
let g:multi_cursor_quit_key='<Esc>'

" YouCompleteMe
let g:ycm_autoclose_preview_window_after_completion = 1
let g:ycm_min_num_of_chars_for_completion = 1

"----------------------------------------------
" Plugin: vimwiki/vimwiki
"----------------------------------------------
let g:vimwiki_ext2syntax = {'.md': 'markdown', '.markdown': 'markdown', '.mdown': 'markdown'}

" Path to wiki
"let g:vimwiki_list = [{
"        \ 'path': '~/Documents/vimwiki',
"        \ 'syntax': 'markdown',
"        \ 'ext': '.vimwiki.markdown'}]

au FileType vimwiki set expandtab
au FileType vimwiki set shiftwidth=2
au FileType vimwiki set softtabstop=2
au FileType vimwiki set tabstop=2
