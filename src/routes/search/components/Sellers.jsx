// import logo from '../../../assets/logo.png'
import {sellerNameList, sellerPhraseList, sellerPhotoList, cxPhotoList, cxReviewList, sellerSkillList} from './Data'



const sellersObject = [
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    {
      name: sellerNameList[Math.floor(Math.random()*sellerNameList.length)],
      level: Math.ceil(Math.random()*5),
      phrase: sellerPhraseList[Math.floor(Math.random()*sellerPhraseList.length)],
      rating: Math.ceil(Math.random()*5),
      reviews: Math.ceil(Math.random()*100),
      cxReviews: [
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        {
          cxPhoto: cxPhotoList[Math.floor(Math.random()*cxPhotoList.length)],
          review: cxReviewList[Math.floor(Math.random()*cxReviewList.length)],
        },
        
    ],
      ratePerHour: Math.ceil(Math.random()*100 + 200),
      
      skills: sellerSkillList[Math.floor(Math.random()*sellerSkillList.length)],


      photo: sellerPhotoList[Math.floor(Math.random()*sellerPhotoList.length)],

      banner: "https://media.istockphoto.com/id/1396466280/photo/home-improvement-construction-tools-on-black-background-with-copy-space-banner.jpg?s=612x612&w=0&k=20&c=MPUykaTV-NfspUQHee8fhmOouZrn89wS_2yv_Ih71GU="
    },
    
  ]

  export default sellersObject
  