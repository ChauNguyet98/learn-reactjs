import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/album-list';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop Vui Tươi',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Hoa',
            thumbnailUrl: 'https://photo-playlist-zmp3.zmdcdn.me/s3/user-playlist?src=HavwqN7EvKCI1og5AfZbHm1SVzWxcET7MbnzbJMFiHHTKIoGOepc50y3BfPatE8I3mDwbsFQiXKC13BF9OY-KruFUOriqFK75rWqmIl1jKXTJZIPAvUr41OTAPKjp-OJJ1Twm2VCia1BGNd1Av-qHqL0USD_akzTJ0acppd0v1OEG7c4ROcqMq87QCGlmwTRHWS-n2kDe4CNNskIVOJq5HHMEPShYlGM5rLgboo6zKL22JsMDOZZGKvFRvr-ogeV1Hicp3E6xGv5N6o8CzNj2aKFTTWkqkuEJmrpYtBGl0CPMIkATjIq3XvQVDf_XUK9Gq0XoMSYVG&size=thumb/240_240'
        },
        {
            id: 3,
            name: 'Nhẹ Nhàng Cùng V-Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/8/a/d/78ad3538b5ff80aa895ec7a2d53fc152.jpg'
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;