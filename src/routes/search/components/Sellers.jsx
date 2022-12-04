// import logo from '../../../assets/logo.png'
import {sellerNameList, sellerPhraseList, sellerPhotoList, cxPhotoList, cxReviewList, sellerSkillList, sellerBannerList} from './Data'


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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

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
      banner: sellerBannerList[Math.floor(Math.random()*sellerBannerList.length)],

    },
      
  ]

  export default sellersObject
  