import React from 'react'
import '../Styles/ProfileCard.css'
const ProfileCard = () => {
  return (
    
<div class="card">
    <div class="infos">
        <div class="image"></div>
        <div class="info">
            <div>
                <p class="name">
                    John Doe
                </p>
                <p class="function">
                    Front-end dev 
                </p>
            </div>
            <div class="stats">
                    <p class="flex flex-col">
                        Articles
                        <span class="state-value">
                            34
                        </span>
                    </p>
                    <p class="flex">
                        Followers
                        <span class="state-value">
                            455
                        </span>
                    </p>
                    
            </div>
        </div>
    </div>
    <button class="request" type="button">
            Add friend
        </button>
</div>

  )
}

export default ProfileCard