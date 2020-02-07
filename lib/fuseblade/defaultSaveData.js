let defaultSaveData = 
{
    teams: [
        {
            currentAgents: 1, // If this is wrong can throw errors?
            movesMade: 0,
            isPlaying: true,
            killCount: [0,0],
        },
        {
            currentAgents: 1,
            movesMade: 0,
            isPlaying: true,
            killCount: [0,0],
        }
    ],
    map: [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]],
    influence: null,
    agents: [[
        {
            collideRadius: 0.5,
            scale: 1,
            uid: 1,
            x: 1,
            y: 1,
            rotation: 0,
            velocityX: 0,
            velocityY: 0,
            inUse: true,
            team: 0,
            //crouching: false,
            //shieldUp: false,
            ammoCurrent: 1,
            health: 1,
            speed: 1,
            maxHealth: 1,
            meleeDamage: 1,
            rangedDamage: 1,
            reloadTime: 1,
            rateOfFire: 1,
            ammoClipSize: 1,
            burstFirePossible: true,
            burstFireOn: false,
            rotSpeed: 1,
            rotVelocity: 1,
            reloadWait: 0,
            shieldUp: false
        }
    ],
    [
        {
            collideRadius: 0.5,
            scale: 1,
            uid: 1,
            x: 1,
            y: 1,
            rotation: 0,
            velocityX: 0,
            velocityY: 0,
            inUse: true,
            team: 0,
            //crouching: false,
            //shieldUp: false,
            ammoCurrent: 1,
            health: 1,
            speed: 1,
            maxHealth: 1,
            meleeDamage: 1,
            rangedDamage: 1,
            reloadTime: 1,
            rateOfFire: 1,
            ammoClipSize: 1,
            burstFirePossible: true,
            burstFireOn: false,
            rotSpeed: 1,
            rotVelocity: 1,
            reloadWait: 0,
            shieldUp: false
        }
    ]]
}
export { defaultSaveData };