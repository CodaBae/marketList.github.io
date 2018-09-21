// my img
import mybest from '../image/mybest.png'
import backgroundimg from '../image/backgroundimg.png'

//my products
import bagit from '../image/bagit.png'
import sneakers from '../image/sneakers.png'
import DieFor from '../image/DieFor.png'



const generateVoteCount = () => {
return Math.floor((math.random() * 50) + 15);
}

const seed = {
    products: [
        {
            id: 1,
            title: "yellow pail",
            description: "On-demand sand castle construction expertise",
            url: "#",
            vote: generateVoteCount(),
            submittedAvatarUrl: bagit,
            productImgUrl: mybest,
        },
        {
            id: 2,
            title: "Supermajority: The fantasy congress legue",
            description: "earn points when your favourite politicain pass legislation.",
            url: "#",
            vote: generateVoteCount(),
            submittedAvatarUrl:sneakers,
            productImgUrl: backgroundimg,
        },
        {
            id: 3,
            title: "ytinfoild: tailored tinfoil hats",
            description: "we already have your measurement and shipping class address.",
            url: "#",
            vote: generateVoteCount(),
            submittedAvatarUrl: DieFor,
            productImgUrl: mybest
        },
  
        
    ]
}
export default seed