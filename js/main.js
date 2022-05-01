const about = document.querySelector('#about')
const signup = document.querySelector('#signup')
const aboutContent = document.querySelector('#about-content')
const signupContent = document.querySelector('#signup-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Lanced',
        modal: true,
        width: '300px',
        height: '400px',
        x: "center",
        y: "center",
        border: 4,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('rgb(199, 0, 83)')
        },
        onblur: function() {
            this.setBackground('rgb(199, 100, 139)')
        }
    })
})

signup.addEventListener('click', () => {
    const signupBox = new WinBox({
        title: 'Sign up for Lanced',
        modal: true,
        background: 'rgb(199, 0, 83)',
        width: '300px',
        height: '400px',
        x: "center",
        y: "center",
        border: 4,
        mount: signupContent,
        onfocus: function() {
            this.setBackground('rgb(199, 0, 83)')
        },
        onblur: function() {
            this.setBackground('rgb(199, 100, 139)')
        }
    })
})