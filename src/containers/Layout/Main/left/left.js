import React from 'react';
import styles from './left.module.scss';
import Messages from '../../../../components/messages/messages';
import img1 from '../../../../images/dog-image-1.jpg';
import img2 from '../../../../images/dog-image-2.jpg';
import img3 from '../../../../images/dog-image-3.jpg';
import avatar from '../../../../images/avatar.jpg';
import icons from '../../../../images/icons.svg';

const imgs = [img1, img2, img3];

const left = () => (
  <section className={styles.left}>
    <div className={styles.leftPhone}>
      <div className={styles.leftPhoneBg}>
        <div className={styles.leftPhoneHead}>
          <span className={styles.leftPhoneHeadSp}></span>
          <div className={styles.leftPhoneHeadDown}>
            <svg>
              <use
                xlinkHref={`${icons}#icon-chevron-thin-left`}
              />
            </svg>
            <img src={avatar} alt="avatar" />
            <div>
              <h4>Samuel Green</h4>
              <span>Available to Walk</span>
            </div>
            <svg>
              <use
                xlinkHref={`${icons}#icon-dots-three-vertical`}
              />
            </svg>
          </div>
        </div>
        <div className={styles.leftPhoneBody}>
          <Messages type="recieve">
            That sounds great. I’d be happy with that.
          </Messages>
          <Messages type="recieve">
            Could you send over some pictures of your dog,
            please?
          </Messages>
          <div className={styles.leftPhonebox}>
            {imgs.map((cur, i) => (
              <img
                src={cur}
                alt={cur}
                key={i}
                className={styles.leftPhoneBodyimg}
              />
            ))}
          </div>
          <Messages type="sent">
            Here are a few pictures. She’s a happy girl!
          </Messages>
          <Messages type="sent"> Can you make it?</Messages>
          <Messages type="recieve">
            She looks so happy! The time we discussed works.
            How long shall I take her out for?
          </Messages>

          <Messages type="radio">
            <span></span>
            <p>30 minute walk</p>
            <h3> $29 </h3>
          </Messages>

          <Messages type="radio">
            <span></span>
            <p>1 hour walk</p>
            <h3> $49 </h3>
          </Messages>
        </div>

        <div className={styles.leftPhoneFoot}>
          <p> Type a message…</p>
          <div>
            <svg>
              <use
                xlinkHref={`${icons}#icon-chevron-right`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.leftBg} />
  </section>
);

export default left;
