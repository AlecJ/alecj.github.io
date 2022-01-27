const app = Vue.createApp({
    data() {
        return {
            about_me: "My name is Alec Jordan. I am a Full-Stack Developer. I like making youtube videos and web-apps, skiing, and playing video and board games with my friends! I graduated with a degree in Computer Science from Northeastern University in 2018. I'm skilled in Python, Flask, Django, Javascript, VueJS, ReactJS, and Docker. I'm also learning Unity and Level Design. ",
            bio_photo_link: 'assets/images/hot dog.jpg',
            project_one_name: "De_Bug",
            project_one_photo_link: 'assets/images/de_bug.png',
            project_one_bio: "My first complete level created for Counter-Strike: Global Offensive. I've messed around with the hammer editor for many years, often creating deathmatch or mini-game levels. I began by sketching the level; the first part of the level I designed was actually the garage, featuring a spawn to spawn duel from opposing ramps. The garage itself features many 1v1 level elements to create a unique and exciting start to each round. Click on this project to see more about the design.",
            project_two_name: "RPG Manager",
            project_two_photo_link: 'assets/images/rpgmanager.png',
            project_two_bio: "A Flask / ReactJS Webapp I built for my friend who was running a Dungeon and Dragons' campaign for my friends. It allows dungeon masters to keep track of their party's characters including currency, items, and notes.",
            selected_img_id: null,
        }
    },
    methods: {
        expandPicture(num) {
            if (num >= 1 && num <= 3) {
                this.selected_img_id = num
            } else {
                this.selected_img_id = null;
            }
        }
    }
})