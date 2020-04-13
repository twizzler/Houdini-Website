# Houdini-Website
A replication of the Club Penguin's website for houdini

The backend code was entirely written by myself in Flask using Python 2.7, however most of the [Avatar](https://github.com/Times-0/Avatar/blob/master/Avatar.py) API was written by Dote that I've simply implemented in this website.

The first thing you probably want to start off with is checking that you have [houdini](https://github.com/Solero/Houdini) installed, if not make sure to follow the proper [tutorials](https://solero.github.io).  
This is the first version of the panel, it has not been used for production yet (as of november 1st 2018). I will also only list all the modules that you need for this panel, the rest is in your hands, that is to say, how to setup an UWSGI server on nginx and so on, google it.  
If you want to modify the HTML content to put some details or change others go ahead and play with the website.  
Please leave the footer as it is, I've spent quite some time making this, my effort is worth leaving it like that.  

You can add me on discord for more help: kevin#6832  

# Modules required

  - Flask
  - bcrypt
  - Flask-SQLAlchemy
  - Flask-SQLAlchemy-Session
  - requests
  - Pillow
  - validate_email
  - mysql-python

# Screenshots
![Home](https://i.imgur.com/owdz7g4.jpg "Home")
![FAQ](https://imgur.com/4PC5xBr.jpg "FAQ")
![Panel Login](https://imgur.com/nnegUCk.jpg "Panel Login")
![Inside the panel](https://imgur.com/5xAEXhq.jpg "Inside the panel")
