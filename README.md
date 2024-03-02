# Djanog Flowbit TailwindCSS Template
 This is a ready to use Boiler plate Template for djanog 

### Tags ###
![Django LTS](https://img.shields.io/badge/Django-4.2.10-333333)
![Node LTS](https://img.shields.io/badge/Node-20.11.1-333333)

# Installation #

## Djanog ##

As of today the Long Term Support(LTS) version is 4.2.10  [February 2024]

### Create a virtual environment ###

First, you will need to install `virtualenv` if you don't have it yet. Its convenient to use virtual environments to keep your dependencies separate and organized.

You can install it via pip:

```bash
pip install virtualenv
```
Then to create a new virtual environment, run the following command:

```bash
virtualenv myenv
```
Where `myenv` is the name of your virtual environment. You can replace it with your preferred name.

Then to activate the virtual environment, run the following command:

```bash
source myenv/bin/activate # for Linux and macOS
myenv\Scripts\activate # for Windows
```
Where `myenv` is the name of your virtual environment. You can replace it with your preferred name.

### Install TailwindCSS ###

Now we are going to install LTS version of Django. To do that, run the following command:

```bash
pip install django==4.2.10
``` 

### Install TailwindCSS ###

As recommended by the TailwindCSS documentation, we will use `npm` to install TailwindCSS. If you don't have `npm` installed yet, you can download it from the official website. link: [Node LTE 20.11.1](https://nodejs.org/dist/v20.11.1/node-v20.11.1-linux-x64.tar.xz) 
Restart your terminal after installing `npm` to make sure it's available.
```bash
node -v
```
```bash
npm -v
```
After installing `npm`, you can now install TailwindCSS.
1. Run the following command the install Tailwind CSS as a dev dependency using NPM:
```bash
npm install -D tailwindcss
```
2. Create a TailwindCSS configuration file by running the following command:
```bash
npx tailwindcss init
```
3. Configure the template paths using the content value inside the Tailwind configuration file:

```js
module.exports = {
  content: [
      './templates/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
{there is a file called tailwind.config.js in the root directory of the project}
{there a catch while configuringit for djanog, the below is on doc of tailwindcss}
{Then below config is have tested and working for djanog}

```js
```

### Install Flowbit ###

Flowbite is an open source library of interactive components built on top of Tailwind CSS and 
it can be installed using NPM and required as a plugin inside Tailwind CSS.

Install Flowbite as a dependency using NPM:
```bash
npm install flowbite
```

Require Flowbite as a plugin inside the `tailwind.config.js` file:
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
Include Flowbite inside the content value of the tailwind.config.js file:
module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Include Flowbite’s JavaScript file inside the _base.html file just before the end of the <body> tag using CDN or by including it directly from the node_modules/ folder:
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
Now that you have everything configured you can check out the components from Flowbite such as navbars, modals, buttons, datepickers, and more.