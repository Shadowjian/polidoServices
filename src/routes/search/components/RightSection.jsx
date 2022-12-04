import styled from 'styled-components'
import React from 'react'


//TODO create a new object for the seller's profile:

// 1. banner
// 2. phrase inside banner 
// 3. profile pic
// 4. reviews/testimonials
// 5. ratings

//TODO
// 6. create a function to make it a modal -- DONE!
// 7. finalize the css

const SellerSection = styled('section')`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    max-width: 600px;
    height: 100vh;
    background-color: var(--bg-primary);
    z-index: 9999;
    
`
const BannerDiv = styled.div `
  position: relative;
  height: 200px;
  width: 100%;
  background: var(--bg-color3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
  .banner {
    overflow: hidden;
    width: 100%;
  }
  .banner img {
    width: 100%;
  }
  .close-btn {
    width: fit-content;
    color: var(--color-text4);
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 20px;
    left: 20px;
    box-shadow: 1px 1px 2px;
  }
  .close-btn:hover{
    border: solid white 1px;
    border-bottom: none;
    border-right: none;
    box-shadow: none;
    color: var(--link-color);

  }
  h4{
    position: absolute;
    width: 80%;
    text-align: center;
    color: var(--color-text4);
    font-style: italic;
  }
  .profile-pic {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: purple;
      bottom: -30px;
      width: 6rem;
      height: 6rem;
      border: 5px solid var(--bg-primary);
      border-radius: 50%;
      overflow: hidden;
      img {
      width: 100%;
    }
  }
`

const ProfileDiv = styled.div`
margin-top: 20px;
text-align: center;
width: 90%;
  padding: 10px;
    .name {
      color: var(--color-text2);
      font-size: x-large;
    }
    .name span {
      color: var(--link-color);
    }

    .rating {
      color: var(--color-text2);
    }
    i {
      color: var(--link-color);
    }
  

`
const ReviewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin: 40px 0px;
    color: var(--color-text2);
    font-size: x-large;
  }
`

const CxReview = styled.div`
display: flex;
flex-direction: column;
/* background-color: blue; */
justify-content: space-between;
align-items: center;
gap: 10px;
width: 90%;
margin-bottom: 30px;
  .cx-photo {
    border-radius: 50%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    /* align-items: center; */
    /* border: 1px solid purple; */
    width: 60px;
    height: 60px;
    overflow: hidden;
    box-shadow: 0px 1px 2px var(--color-text4);
  }
  .cx-photo img {
    width: 110%;
  }
  p {
    font-size: smaller;
    font-style: italic;
    color: var(--color-text3)
  }
  span {
    font-size: x-large;
    font-weight: 600;
    color: var(--color-text2);
  }
`

const BookMe = styled.div`
  position: absolute;
  align-self: center;
  bottom: 20px;
  width: 50%;
  div {
    text-align: center;
    width: 100%;
    padding: 10px;
    color: var(--color-text4);
    font-size: larger;
    border: 1px solid var(--color-text2);
  }
  div:hover {
    background-color: var(--bg-hover);
    color: var(--color-hover);
    cursor: pointer;
    border: none;
  }
  
`

function RightSection({hideSeller, sellerData}) {

  const bookMe = () => {
    alert('fix this')
  }

  console.log(sellerData)
  return (
    <SellerSection id='seller-profile'>
      <BannerDiv>
        <div className='close-btn' onClick={hideSeller}>
          X
        </div>
        <div className='banner'><img src={sellerData.banner} alt="" /></div>
        <h4>"{sellerData.phrase}"</h4>
        <div className='profile-pic'>
          <img src={sellerData.photo} alt="" />
        </div>
      </BannerDiv>
      <ProfileDiv>
          <div className='name'>Hi, I'm <span>{sellerData.name}</span></div>
          {/* <div className='rating'>
            <span>Rating {sellerData.rating} <i className='fa-solid fa-star'></i></span>
          </div> */}
      </ProfileDiv>    
      <ReviewsDiv>
        <header>My customer reviews...</header>
          
          <CxReview>
            
            {sellerData.cxReviews.map((review)=>{
              console.log(review)
            return (
              <>
              <div className='cx-photo'>
                <img src={review.cxPhoto} alt="" />
              </div>
              <p><span>"</span>{review.review}<span>"</span></p>
            </> 
              )
            })}
          </CxReview>
     
      </ReviewsDiv>
      <BookMe>
        <div onClick={bookMe}>Book Me</div>
      </BookMe>
    </SellerSection>
  )
}

export default RightSection