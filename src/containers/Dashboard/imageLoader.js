const images = {
    bag: require('./image/bag.png'),
    clock: require('./image/clock.png'),
    flagNotFound: require('./image/arrow.png')
};

export function loadImage(imageName) {
    if (images.hasOwnProperty(imageName)) {
        return images[imageName];
    }
    return images['flagNotFound'];
}