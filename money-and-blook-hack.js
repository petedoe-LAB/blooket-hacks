// Blooket Money & Blook Hack
// This script allows you to set your money to any amount and use any blook in the game

// Function to set money to any amount
function setMoney(amount) {
  try {
    // Access the game state through window object
    if (window.blooket && window.blooket.store) {
      window.blooket.store.dispatch({
        type: 'SET_MONEY',
        payload: amount
      });
      console.log(`✓ Money set to: ${amount}`);
    } else {
      console.error('Could not access Blooket game state');
    }
  } catch (e) {
    console.error('Error setting money:', e);
  }
}

// Function to unlock all blooks
function unlockAllBlooks() {
  try {
    if (window.blooket && window.blooket.store) {
      // Get all available blooks
      const allBlooks = [
        'chick', 'parrot', 'penguin', 'narwhal', 'dragon', 'phoenix', 'demon', 
        'angel', 'zombie', 'ghost', 'vampire', 'werewolf', 'alien', 'robot',
        'ninja', 'pirate', 'astronaut', 'caveman', 'knight', 'wizard', 'witch',
        'mummy', 'frankenstein', 'pumpkin', 'santa', 'elf', 'snowman', 'reindeer',
        'leprechaun', 'cupid', 'bunny', 'cheshire', 'bigfoot', 'loch', 'yeti',
        'cyclops', 'medusa', 'minotaur', 'cerberus', 'hydra', 'kraken'
      ];
      
      // Unlock all blooks
      allBlooks.forEach(blook => {
        window.blooket.store.dispatch({
          type: 'UNLOCK_BLOOK',
          payload: blook
        });
      });
      
      console.log(`✓ Unlocked ${allBlooks.length} blooks!`);
    } else {
      console.error('Could not access Blooket game state');
    }
  } catch (e) {
    console.error('Error unlocking blooks:', e);
  }
}

// Function to equip a specific blook
function equipBlook(blookName) {
  try {
    if (window.blooket && window.blooket.store) {
      window.blooket.store.dispatch({
        type: 'EQUIP_BLOOK',
        payload: blookName
      });
      console.log(`✓ Equipped blook: ${blookName}`);
    } else {
      console.error('Could not access Blooket game state');
    }
  } catch (e) {
    console.error('Error equipping blook:', e);
  }
}

// Export functions for console use
window.blooketHacks = {
  setMoney,
  unlockAllBlooks,
  equipBlook
};

console.log('✓ Blooket Hacks loaded!');
console.log('Available commands:');
console.log('  blooketHacks.setMoney(amount) - Set your money to any amount');
console.log('  blooketHacks.unlockAllBlooks() - Unlock all blooks');
console.log('  blooketHacks.equipBlook(name) - Equip a specific blook');
console.log('\nExample: blooketHacks.setMoney(999999)');
console.log('Example: blooketHacks.equipBlook("dragon")');
