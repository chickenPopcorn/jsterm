var CONFIG = CONFIG || {};

CONFIG.prompt = function(cwd, user) {
   if (user)
       return '<span class="user">' + user + '</span>' +
           '<span class="sign">@</span>' +
           '<span class="host">ruicongxie.com</span>' +
           ' <span class="dir">' + cwd + '</span>' +
           ' <span class="sign">$</span> ';
   return '<span class="sudo">Arch Linux 4.10.1-rxie (tty1)</span>' +
       ' <span class="sign">$</span> ';

};

CONFIG.username = '';
