import Stats from '../../libs/stats.module.js';

function stats() {
    
    const stats = Stats();

    stats.tick = () => stats.update();

    return stats;
}

export { stats };

