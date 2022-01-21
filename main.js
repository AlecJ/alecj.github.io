const app = Vue.createApp({
    data() {
        return {
            about_me: "My name is Alec Jordan. I am a Web Developer pursuing a career in Level Design. I like making youtube videos and web-apps, skiing, and playing video and board games with my friends! I graduated with a degree in Computer Science from Northeastern University in 2018 and have been figuring things out ever since.",
            bio_photo_link: 'assets/images/hot dog.jpg',
            project_one_name: "De_Bug",
            project_one_photo_link: 'assets/images/de_bug.png',
            project_one_bio: "My first complete level created for Counter-Strike: Global Offensive. I've messed around with the hammer editor for many years, often creating deathmatch or mini-game levels. I began by sketching the level; the first part of the level I designed was actually the garage, featuring a spawn to spawn duel from opposing ramps. The garage itself features many 1v1 level elements to create a unique and exciting start to each round. Click on this project to see more about the design.",

        }
    },
    methods: {
        // get_instagram_pics() {
        //     //  hit the Instagram API for my photos
        //     user_id = 7875044994
        //     num_photos = 20

        //     url = "https://api.instagram.com/v1/users/self/media/recent/?access_token={INSTRAGRAM_API_TOKEN}"

        //     r = requests.get(url)
        //     data = r.json().get('data', [])[0]

        //     // TODO
        //     // currently there is only one image returned. will break once the account has two or more photos
                
        //     // parse each photo
        //     images = []
        //     photo = {}
        //     // for image in data:
        //     // photo['url'] = image.get('images', {}).get('standard_resolution', {}).get('url')
        //     // photo['caption'] = image.get('images', {}).get('caption', {}).get('text')
        //     photo['url'] = data.get('images', {}).get('standard_resolution', {}).get('url')
        //     photo['caption'] = data.get('caption', {}).get('text')
        //     images.append(photo)

        //     context = {'images': images}      
        // }
    }
})