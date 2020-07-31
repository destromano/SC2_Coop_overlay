var mutatorDescriptions = {
    "Random": "Applies a random Mutator that has not yet been chosen for this game.",
    "Walking Infested": "Enemy units spawn Infested Terran upon death in numbers according to the unit&apos;s life.",
    "Outbreak": "Enemy Infested Terrans spawn continuously around the map.",
    "Darkness": "Previously explored areas remain blacked out on the minimap while outside of player vision.",
    "Time Warp": "Enemy Time Warps are periodically deployed throughout the map.",
    "Speed Freaks": "Enemy units have increased movement speed.",
    "Mag-nificent": "Mag Mines are deployed throughout the map at the start of the mission.",
    "Mineral Shields": "Mineral clusters at player bases are periodically encased in a shield which must be destroyed for gathering to continue.",
    "Barrier": "Enemy units and structures gain a temporary shield upon the first time they take damage.",
    "Avenger": "Enemy units gain increased attack speed, movement speed, armor, life, and life-regeneration when nearby enemy units die.",
    "Evasive Maneuvers": "Enemy units teleport a short distance away upon taking damage.",
    "Scorched Earth": "Enemy units set the terrain on fire upon death.",
    "Lava Burst": "Lava periodically bursts from the ground at random locations and deals damage to player air and ground units.",
    "Self Destruction": "Enemy units explode and deal damage to nearby player units upon death.",
    "Aggressive Deployment": "Additional enemy units are periodically deployed onto the battlefield.",
    "Alien Incubation": "All enemy units spawn Broodlings upon death.",
    "Laser Drill": "An enemy Laser Drill constantly attacks player units within enemy vision.",
    "Long Range": "Enemy units and structures have increased weapon and vision range.",
    "Shortsighted": "Player units and structures have reduced vision range.",
    "Mutually Assured Destruction": "Enemy Hybrid units detonate a Nuke upon death.",
    "We Move Unseen": "All enemy units are permanently cloaked.",
    "Nap Time": "Player worker units periodically fall asleep and must be awoken via the Wake Up ability on their command card.",
    "Slim Pickings": "Player worker units gather resources at a reduced rate, but resource pickups spawn throughout the map.",
    "Concussive Attacks": "Player units are slowed by all enemy attacks.",
    "Stone Zealots": "The enemy has deployed Stone Zealots.",
    "Just Die!": "Enemy units are automatically revived upon death.",
    "Temporal Field": "Enemy Temporal Fields are periodically deployed throughout the map.",
    "Void Rifts": "Void Rifts periodically appear in random locations and spawn enemy units until destroyed.",
    "Twister": "Tornadoes move across the map, damaging and knocking back player units in their path.",
    "Orbital Strike": "Enemy Orbital Strikes are periodically fired throughout the map.",
    "Purifier Beam": "An enemy Purifier Beam moves across the map toward nearby player units.",
    "Blizzard": "Storm clouds move across the map, damaging and freezing player units in their path.",
    "Fear": "Player units will occasionally stop attacking and run around in fear upon taking damage.",
    "Photon Overload": "All enemy structures attack nearby hostile units.",
    "Minesweeper": "Groups of Widow Mines and Spider Mines are buried throughout the battlefield.",
    "Chaos Studios": "Mutators are chosen at random and periodically cycle throughout the mission.",
    "Void Reanimators": "Void Reanimators wander the battlefield, bringing your enemies back to life.",
    "Going Nuclear": "Nukes are launched at random throughout the map.",
    "Life Leech": "Enemy units and structures steal life or shields whenever they do damage.",
    "Power Overwhelming": "All enemy units have energy and use random abilities.",
    "Micro Transactions": "Giving commands to your units costs resources based on the unit&apos;s cost.",
    "Missile Command": "Endless missile bombardments target your structures and must be shot down throughout the mission.",
    "Vertigo": "Your camera randomly changes positions.",
    "Undying Evil": "A monster is deployed against you.  Each time you kill it, it will gather more power and return even stronger.",
    "Polarity": "Each enemy unit is immune to either your units or your ally&apos;s units.",
    "Transmutation": "Enemy units have a chance to transform into more powerful units whenever they deal damage.",
    "Afraid of the Dark": "Vision provided by all sources is extremely limited except when in view of your camera.",
    "Trick or Treat": "Civilians visit your Candy Bowl looking for treats, which are generated by spending minerals. If no treats are available, the civilians transform into random enemy units.",
    "Turkey Shoot": "Supply can only be generated by killing turkeys that wander throughout the map. Doing so may anger the turkeys that remain.",
    "Sharing Is Caring": "Supply is shared between you and your partner, and units from both armies contribute to your combined supply cap.",
    "Diffusion": "Damage dealt to enemies is split evenly across all nearby units, including your own.",
    "Black Death": "Some enemy units carry a plague that deals damage over time and spreads to other nearby units. The plague spreads to your units when the enemy unit is killed.",
    "Eminent Domain": "Enemies gain control of your structures after destroying them.",
    "Gift Exchange": "Gifts are periodically deployed around the map.  If you don&apos;t claim them, Amon will!",
    "Naughty List": "Player units and structures take increased damage for each enemy they&apos;ve killed.",
    "Extreme Caution": "Your units will not obey any command placed in areas they cannot see.",
    "Insubordination": "Your units don&apos;t follow orders exactly.",
    "Heroes from the Storm": "Attack waves will be joined by heroes of increasing power.",
    "Inspiration": "Enemy Heroic units increase the attack speed and armor of all enemies within a small range. ",
    "Hardened Will": "Enemy Heroic units reduce all incoming damage to a maximum of 10 when any non-heroic enemy unit is near them.",
    "Fireworks": "Enemies launch a dazzling fireworks display upon death, dealing damage to your nearby units.",
    "Lucky Envelopes": "Festive envelopes containing resource pickups are dropped at random throughout the map.",
    "Sluggishness": "Your units accelerate and turn slowly.",
    "Double-Edged": "Your units also receive all the damage they deal, but they are healed over time.",
    "Fatal Attraction": "When enemy units and structures die, any of your nearby units are pulled to their location.",
    "Propagators": "Shapeless lifeforms creep toward your base, transforming all of the units and structures they touch into copies of themselves.",
    "Moment Of Silence": "When a Heroic enemy dies, all player units around it will reflect on their transgressions, leaving them unable to attack or use abilities.",
    "Kill Bots": "Offensive robots of a mysterious origin have been unleashed on the Koprulu sector, intent on destruction. Through cunning engineering, they are invincible until their pre-programmed kill counter has been filled. After that occurs, they will shut down. But can you survive for that long?",
    "Boom Bots": "Uncaring automatons carry a nuclear payload toward your base. One player must discern the disarming sequence and the other player must enter it.",
    "The Mist": "Mists roll over battlefield while unseen terrors lurk inside. Desperate warriors will fall and rise again.",
    "The Usual Suspects": "Enemy attacks will be led by dark reflections of Heroes in the service of Amon",
    "Supreme Commander": "Massive units gain 25% life and are bigger, the rest of units have 25% less life and are smaller. All units gain +2 weapon range.",
    "Shapeshifters": "Shapeshifters spawn with enemy attacks and in enemy bases. These creatures can transform into any unit of yours.",
    "Rip Field Generators": "Rip-Field Generators are deployed throughout the map. They will burn any unit that comes into their range.",
    "Repulsive Field": "Enemy attacks will push your units away.",
    "Old Times": "We are traveling back in time. Unit selection is limited to 12 units. There is no worker auto-mine, no smart cast, no multiple building select, etc.",
    "Nuclear Mines": "Nuclear Mines have been placed around the battlefield.",
    "Necronomicon": "Killed player units will rise again at enemy bases.",
    "Mothership": "Enemy Mothership roams the map and attacks player units.",
    "Matryoshka": "Enemy units will spawn mini-self upon death. This can trigger several times for larger units.",
    "Level Playing Field": "All weapons and abilities can hit both air and ground targets.",
    "Infestation Station": "Damaging any structure can cause infestation.",
    "I Collect, I Change": "When a non-heroic unit kills a hostile unit, it becomes the unit it killed. Units can only evolve into more expensive units.",
    "Great Wall": "Enemy begins massive effort to construct defensive structures around the battlefield.",
    "Endurance": "Player and enemy units and structures have 3x more health and shields.",
    "Dark Mirror": "Enemy attack waves will contain player units.",
    "Bloodlust": "Enemy units gain increased attack speed, movement speed, acceleration and damage reduction as their health gets lower.",
    "BlizzCon Challenge": "The BlizzCon Challenge starts with a single Mutator. As time passes, more Mutators will be added, until TEN Mutators are running wild at the same time."
};
var masteryNames = {
    'Abathur': ['Toxic Nest Damage', 'Mend Healing Duration', 'Symbiote Ability Improvement', 'Double Biomass Chance', 'Toxic Nest Maximum Charges and Cooldown', 'Structure Morph and Evolution Rate'],
    'Alarak': ['Alarak Attack Damage', 'Combat Unit Attack Speed', 'Empower Me Duration', 'Death Fleet Cooldown', 'Structure Overcharge Shield and Attack Speed', 'Chrono Boost Efficiency'],
    'Artanis': ['Shield Overcharge Duration and Damage Absorption', 'Guardian Shell Life and Shield Restoration', 'Energy Regeneration and Cooldown Reduction', 'Speed Increases for Warped In Units', 'Chrono Boost Efficiency', 'Initial and Maximum Spear of Adun Energy'],
    'Dehaka': ['Devour Healing Increase', 'Devour Buff Duration', 'Greater Primal Wurm Cooldown', 'Pack Leaders Active Duration', 'Gene Mutation Chance', 'Dehaka Attack Speed'],
    'Fenix': ['Fenix Suit Attack Speed', 'Fenix Suit Offline Energy Regeneration', 'Champion A.I. Attack Speed', 'Champion A.I. Life and Shields', 'Chrono Boost Efficiency', 'Extra Starting Supply'],
    'Horner': ['Strike Fighter Area of Effect', 'Stronger Death Chance', 'Significant Other Bonuses', 'Double Salvage Chance', 'Air Fleet Travel Distance', 'Mag Mine Charges, Cooldown, and Arming Time'],
    'Karax': ['Combat Unit Life and Shield', 'Structure Life and Shields', 'Repair Beam Healing Rate', 'Chrono Wave Energy Generation', 'Chrono Boost Efficiency', 'Initial and Maximum Spear of Adun Energy'],
    'Kerrigan': ['Kerrigan Energy Regeneration', 'Kerrigan Attack Damage', 'Combat Unit Vespene Gas Cost', 'Augmented Immobilization Wave', 'Expeditious Evolutions', 'Primary Ability Damage and Attack Speed'],
    'Nova': ['Nuke and Holo Decoy Cooldown', 'Griffin Airstrike Cost', 'Nova Primary Ability Improvement', 'Combat Unit Attack Speed', 'Nova Energy Regeneration', 'Unit Life Regeneration'],
    'Raynor': ['Research Resource Cost', 'Speed Increases for Drop Pod Units', 'Hyperion Cooldown', 'Banshee Airstrike Cooldown', 'Medics Heal Additional Target', 'Mech Attack Speed'],
    'Stetmann': ['Upgrade Resource Cost', 'Gary Ability Cooldown', 'Stetzone Bonuses', 'Maximum Egonergy Pool', 'Deploy Stetellite Cooldown', 'Structure Morph Rate'],
    'Stukov': ['Volatile Infested Spawn Chance', 'Infest Structure Cooldown', 'Aleksander Cooldown', 'Apocalisk Cooldown', 'Infested Infantry Duration', 'Mech Attack Speed'],
    'Swann': ['Concentrated Beam Width and Damage', 'Combat Drop Duration and Life', 'Immortality Protocol Cost and Build Time', 'Structure Health', 'Vespene Drone Cost', 'Laser Drill Build Time, Upgrade Time, and Upgrade Cost'],
    'Tychus': ['Tychus Attack Speed', 'Tychus Shredder Grenade Cooldown', 'Tri-Outlaw Research Improvement', 'Outlaw Availability', 'Medivac Pickup Cooldown', 'Odin Cooldown'],
    'Vorazun': ['Dark Pylon Range', 'Black Hole Duration', 'Shadow Guard Duration', 'Time Stop Unit Speed Increase', 'Chrono Boost Efficiency', 'Initial and Maximum Spear of Adun Energy'],
    'Zagara': ['Zagara Life and Energy Regeneration', 'Zagara Attack Damage', 'Baneling Attack Damage', 'Zergling Evasion', 'Roach Damage and Life', 'Intensified Frenzy'],
    'Zeratul': ['Zeratul Attack Speed', 'Combat Unit Attack Speed', 'Artifact Fragment Spawn Rate', 'Support Calldown Cooldown Reduction', 'Legendary Legion Cost', 'Avatar Cooldown'],
    'Mengsk': ['Laborer and Trooper Imperial Support', 'Royal Guard Support', 'Terrible Damage', 'Royal Guard Cost  ', 'Starting Imperial Mandate', 'Royal Guard Experience Gain Rate']
};

// Start
var showmutators = true;
var function_is_running = false;
var PORT = 7305;
var DURATION = 60;
var maxUnits = 5;
var gP1Color = '#0080F8';
var gP2Color = '#00D532';
var UNIFIEDHOTKEY = true;
var toBeShown = false;

//main functionality
setColors(null, null, null, null);
connect_to_socket();

// DEBUG START
// debug();
// document.body.style.backgroundColor = "black";
// fillhotkeyinfo('Ctrl+*','None','Alt+/','Alt+*',true,false);
// showNotification();
// DEBUG END


function debug() {
    DURATION = 3;
    var dummydata = {
        'replaydata': true,
        'result': 'Victory',
        'map': 'Dead of Night',
        'allyPrestige': 'Heavy Weapons Specialist',
        'mainPrestige': 'Desolate Queen',
        'filepath': 'C:\\Users\\Maguro\\Documents\\StarCraft II\\Accounts\\452875987\\2-S2-1-7503439\\Replays\\Multiplayer\\Dead of Night (47).SC2Replay',
        'date': '2020-06-19 20:53:27',
        'extension': 0,
        'B+': 1,
        'comp': 'Dominion Battlegroup',
        'length': 745.0,
        'main': 'Maguro',
        'mainAPM': 117,
        'mainCommander': 'Kerrigan',
        'mainCommanderLevel': 14,
        'mainMasteries': [30, 0, 30, 0, 30, 0],
        'mainkills': 2801,
        'mainIcons': {
            'deadofnight': 117,
            'tus': 25,

        },
        'ally': 'Tichondrius',
        'allyAPM': 30,
        'allyCommander': 'Stukov',
        'allyCommanderLevel': 7,
        'allyMasteries': [15, 15, 30, 0, 30, 0],
        'allykills': 1338,
        'allyIcons': {
            'propagators': 5,
            'Infested Bunker': 6,

        },
        'mainUnits': {
            'Mutalisk': [60, 12, 1675, 0.6],
            'Kerrigan': [1, 0, 1124, 0.4]
        },
        'allyUnits': {
            'Infested Trooper': [432, 354, 981, 0.73],
            'Apocalisk': [2, 2, 184, 0.14],
            'Infested Civilian': [301, 241, 80, 0.06],
            'Broodling': [485, 485, 44, 0.03],
            'Volatile Infested': [17, 13, 26, 0.02],
            'Infested Bunker': [18, 2, 15, 0.01],
            'Aleksander': [1, 0, 7, 0.01]
        },
        'amonUnits': {
            'Infested Marine': [571, 571, 100, 0.31],
            'Kaboomer': [14, 14, 48, 0.15],
            'Infested Terran': [2946, 2946, 37, 0.12],
            'Aberration': [93, 93, 31, 0.1],
            'Hellbat': [23, 23, 24, 0.07],
            'Broodling': [483, 483, 14, 0.04],
            'Marine': [121, 121, 13, 0.04],
            'Marauder': [23, 23, 7, 0.02],
            'Hunterling': [11, 11, 7, 0.02],
            'Hybrid Reaver': [4, 4, 7, 0.02],
            'Hybrid Destroyer': [8, 8, 6, 0.02],
            'Siege Tank': [7, 7, 6, 0.02],
            'Banshee': [6, 2, 3, 0.01],
            'Thor': [1, 1, 2, 0.01],
            'Viking': [21, 18, 1, 0.0],
            'Raven': [9, 6, 1, 0.0],
            'Ghost': [5, 5, 1, 0.0],
            'Cyclone': [4, 4, 1, 0.0],
            'Hybrid Dominator': [1, 1, 1, 0.0]
        },
        'Victory':5,
        'Defeat':2

    };
    // data = {data: {'LilArrin': [3, 13]}};
    // playerWinrate(data)
    postGameStatsTimed(dummydata);
    // setTimeout(uploadStatus,1500,'Error - some error');
}


function connect_to_socket() {
    if (function_is_running) {
        return
    };
    function_is_running = true;
    let socket = new WebSocket("ws://localhost:" + PORT);
    socket.onopen = function(e) {};
    socket.onmessage = function(event) {
        var data = JSON.parse(event.data)
        if (data['replaydata'] != null) {
            postGameStatsTimed(data)
        } else if (data['mutatordata'] != null) {
            mutatorInfo(data['data'])
        } else if (data['hideEvent'] != null) {
            showhide(false)
        } else if (data['showEvent'] != null) {
            showhide(true)
        } else if (data['uploadEvent'] != null) {
            setTimeout(uploadStatus, 1500, data['response'])
        } else if (data['initEvent'] != null) {
            initColorsDuration(data)
        } else if (data['playerEvent'] != null) {
            playerWinrate(data)
        } else {
            console.log('unidentified message')
        }
    };
    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log('CLEAN EXIT: ' + event)
            reconnect_to_socket();
        } else {
            // console.log('UNCLEAN EXIT: ' + event)
            reconnect_to_socket();
        }
    };
    socket.onerror = function(error) {
        console.log('ERROR: ' + error)
        reconnect_to_socket()
    };
}

function reconnect_to_socket(message) {
    console.log('Reconnecting..')
    function_is_running = false;
    setTimeout(function() {
        connect_to_socket();
    }, 1000);
}

function playerWinrate(dat) {
    var element = document.getElementById('playerstats');
    var text = '';

    for (let [key, value] of Object.entries(dat['data'])) {
        if ((value != null) && (value.length > 1)) {
            let total_games = value[0] + value[1];
            text = text + 'You played ' + total_games + ' games with <span class="player_stat">' + key + '</span> (' + Math.round(100 * value[0] / total_games) + '% winrate)'
        } else {
            text = text + 'No games played with <span class="player_stat">' + key + '</span>'
        }
    }
    element.innerHTML = text;
    element.style.right = '2vh';
    element.style.opacity = '1';
    setTimeout(function() {
        document.getElementById('playerstats').style.right = '-60vh';
        document.getElementById('playerstats').style.opacity = '0'
    }, 12000)
}

function showNotification() {
    document.getElementById('notification').style.opacity = '1';
    setTimeout(function() {
        document.getElementById('notification').style.opacity = '0';
    }, 6000)
}

function fillhotkeyinfo(showh, hideh, newh, olderh, unified, update) {
    var otherinfo = document.getElementById('otherinfo');
    var ttext = '';
    if (update) {
        ttext = '<p id="update">UPDATE AVAILABLE!</p>';
    };
    var text_hide = 'hide';
    var text_show = 'show';
    if (unified) {
        text_hide = 'show/hide';
        text_show = 'show/hide';
    }

    var inner_hide = '<span>' + hideh + '</span> &rArr; ' + text_hide;
    var show_style = '';
    if (hideh == 'None') {
        inner_hide = '';
        show_style = 'colspan="2"';
        text_show = 'show/hide overlay'
    }
    var inner_show = '<span>' + showh + '</span> &rArr; ' + text_show;
    if (showh == 'None') {
        inner_show = ''
    }
    var inner_newer = '<span>' + newh + '</span> &rArr; newer';
    if (newh == 'None') {
        inner_newer = ''
    }
    var inner_older = '<span>' + olderh + '</span> &rArr; older';
    if (olderh == 'None') {
        inner_older = ''
    }

    otherinfo.innerHTML = ttext + '<table><tr><td>' + inner_newer + '</td><td>' + inner_older + '</td></tr><tr><td ' + show_style + '>' + inner_show + '</td><td>' + inner_hide + '</td></tr></table>';
    if (update) {
        document.getElementById('update').style.display = 'block'
    };

    otherinfo.style.opacity = '1';
    setTimeout(function() {
        document.getElementById('otherinfo').style.opacity = 0
    }, 6000)
}

function initColorsDuration(data) {
    setColors(data['colors'][0], data['colors'][1], data['colors'][2], data['colors'][3]);
    DURATION = data['duration'];
    UNIFIEDHOTKEY = data['unifiedhotkey'];
}


function setColors(P1color, P2color, P3color, MasteryColor) {
    //this function is executed by the app on page load                                                         
    //Player 1
    if (P1color != null) {
        gP1Color = P1color
    };
    document.getElementById('name1').style.color = gP1Color;
    document.getElementById('CMname1').style.color = gP1Color;
    document.getElementById('killbar1').style.backgroundColor = gP1Color;
    document.getElementById('CMtalent1').style.color = gP1Color;

    //Player 2
    if (P2color != null) {
        gP2Color = P2color
    };

    document.getElementById('name2').style.color = gP2Color;
    document.getElementById('CMname2').style.color = gP2Color;
    document.getElementById('killbar2').style.backgroundColor = gP2Color;
    document.getElementById('CMtalent2').style.color = gP2Color;

    //Player 3
    var color = '#FF0000';
    if (P3color != null) {
        color = P3color
    };
    document.getElementById('CMname3').style.color = color;
    document.getElementById('comp').style.color = color;

    //Mastery
    color = '#FFDC87';
    if (MasteryColor != null) {
        color = MasteryColor
    };
    document.getElementById('CMmastery1').style.color = color;
    document.getElementById('CMmastery2').style.color = color;

}

function uploadStatus(result) {
    var loader = document.getElementById('loader');
    var tshowing = DURATION * 1000;

    loader.style.transition = 'opacity 0s';
    loader.style.opacity = '0'
    loader.style.transition = 'opacity 1s';
    loader.innerHTML = ''
    loader.style.opacity = '1';

    if (result.includes('Success')) {
        loader.style.color = 'rgba(0, 150, 0, 1)';
        loader.innerHTML = 'Replay uploaded successfully!';
    } else {
        loader.style.color = 'rgba(225, 0, 0, 1)';
        loader.innerHTML = 'Replay not uploaded!<br>' + result;
    };
}


function mutatorInfo(data) {
    if (!(showmutators)) {
        return
    };
    var mduration = 15 * 1000;
    if (data.length > 6) {
        document.getElementById('mutatorinfo').style.width = '133vh';
    }
    for (i = 0; i < data.length; i++) {
        var divelement = document.getElementById('mut' + i);
        divelement.getElementsByTagName("img")[0].src = '../HQ Mutator Icons/' + data[i][0] + '.png';
        divelement.getElementsByTagName("p")[0].innerHTML = '<span class="muttop">' + data[i][0] + '</span><span class="mutvalue"> ' + data[i][1] + '</span><br><span class="mutdesc">' + mutatorDescriptions[data[i][0]] + '</span>';
        divelement.style.display = 'inline-block';
        setTimeout(function(el) {
            el.style.opacity = '1'
        }, i * 400, divelement);
        setTimeout(function(el) {
            el.style.opacity = '0'
        }, mduration, divelement);
        setTimeout(function(el) {
            el.style.display = 'none'
        }, mduration + 5000, divelement);
    }
}

function postGameStatsTimed(data) {
    //This is a wrapper for postGameStats
    //The goal is to nicely update the data if it's already showing     
    if ((document.getElementById('stats').style.right != '-50vh') && (document.getElementById('stats').style.right != '')) {
        document.getElementById('stats').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('stats').style.opacity = '1'
        }, 300);
        setTimeout(postGameStats, 300, data, showing = true);
    } else {
        postGameStats(data);
    }
}

function format_length(seconds) {
    var gseconds = Math.round(seconds * 1.4);
    var sec = gseconds % 60;
    var min = ((gseconds - sec) / 60) % 60;
    var hr = (gseconds - sec - min * 60) / 3600;

    if (hr > 0) {
        hr = hr + ':'
    } else {
        hr = ''
    }

    if (sec < 10) {
        return hr + min + ':0' + sec
    } else {
        return hr + min + ':' + sec
    }
}

function fillCommander(el, commander, commander_level) {
    var addition = '';
    if (commander == null) {
        return
        }
    if (commander_level < 15) {
        addition = '{'+commander_level+'}'
        }
    if (el == 'com1') {
        fill(el,commander+' '+addition)
       } else {
        fill(el,addition+' '+commander)
       }
}


function postGameStats(data, showing = false) {
    //initial change
    document.getElementById('killbar').style.display = 'block';
    document.getElementById('nodata').style.display = 'none';
    // fill 
    fill('CMtalent1',data['mainPrestige'])
    fill('CMtalent2',data['allyPrestige'])
    fill('comp', data['comp']);

    fill('name1', data['main']);
    fill('result', data['result'] + '!');
    fill('map', data['map'] + '&nbsp;&nbsp;(' + format_length(data['length']) + ')');
    fill('name2', data['ally']);
    fillCommander('com1', data['mainCommander'], data['mainCommanderLevel'])
    fillCommander('com2', data['allyCommander'], data['allyCommanderLevel'])
    fill('apm1', data['mainAPM'] + ' APM');
    fill('apm2', data['allyAPM'] + ' APM');

    if (data['Victory'] != null) {
        fill('session', 'Session: ' + data['Victory'] + ' wins/' + (data['Victory'] + data['Defeat']) + ' games');
    } else {
        fill('session', '');
    };

    if (data['extension'] > 0) {
        fill('brutal', 'weekly/custom')
    } else if (data['B+'] > 0) {
        fill('brutal', 'Brutal+' + data['B+'])
    } else {
        fill('brutal', data['difficulty'])
    };

    // kill counts 
    var killbarW = document.getElementById('killbar').offsetWidth;
    var totalkills = data['mainkills'] + data['allykills']
    if (totalkills > 0) {
        var percent1 = Math.round(100 * data['mainkills'] / totalkills) + '%';
        var percent2 = Math.round(100 * data['allykills'] / totalkills) + '%';
        document.getElementById('killbar1').style.backgroundColor = gP1Color;
        document.getElementById('killbar2').style.backgroundColor = gP2Color;
        //delay unless it's already being showed
        if (!(showing)) {
            setTimeout(function() {
                document.getElementById('killbar1').style.width = percent1;
                document.getElementById('killbar2').style.width = percent2;
            }, 700)
        } else {
            document.getElementById('killbar1').style.width = percent1;
            document.getElementById('killbar2').style.width = percent2
        };
        fill('percent1', percent1);
        fill('percent2', percent2);
    } else {
        document.getElementById('killbar1').style.width = '50%';
        document.getElementById('killbar2').style.width = '50%';
        document.getElementById('killbar1').style.backgroundColor = '#666';
        document.getElementById('killbar2').style.backgroundColor = '#444';
        fill('percent1', '0%');
        fill('percent2', '0%');
    };

    //player stats
    fill('CMname1', data['main']);
    fillicons('CMicons1', data['mainIcons']);
    fillmasteries('CMmastery1', data['mainMasteries'], data['mainCommander']);
    fillunits('CMunits1', data['mainUnits']);

    fill('CMname2', data['ally']);
    fillicons('CMicons2', data['allyIcons']);
    fillmasteries('CMmastery2', data['allyMasteries'], data['allyCommander']);
    fillunits('CMunits2', data['allyUnits'], 'CMicons2');

    fill('CMname3', 'Amon');
    fillunits('CMunits3', data['amonUnits'], null);
    //show 
    showstats();

    //victory data is for automatic showing. In that case automatically hide. Otherwise hide loader.
    if (data['Victory'] == null) {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').innerHTML = ''
    } else {
        setTimeout(hidestats, DURATION * 1000);
    }
}

function showhide(show) {
    if (UNIFIEDHOTKEY == 'true') {
        if (!toBeShown) {
            showstats()
        } else {
            hidestats()
        }
    } else {
        if (show) {
            showstats()
        } else {
            hidestats()
        }
    }
}

function hidestats() {
    toBeShown = false;
    document.getElementById('stats').style.right = '-50vh';
    document.getElementById('bgdiv').style.opacity = '0';
    document.getElementById('loader').style.opacity = '0';
    document.getElementById('session').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('session').innerHTML = '';
        document.getElementById('loader').innerHTML = ''
    }, 1000)
}

function showstats() {
    toBeShown = true;
    document.getElementById('stats').style.right = '2vh';
    document.getElementById('bgdiv').style.opacity = '1';
}

function fill(el, dat) {
    document.getElementById(el).innerHTML = dat;
}

function fillmasteries(el, dat, commander) {
    var text = '';
    if ((dat == null) || (commander == null) || (commander == '') || (masteryNames[commander] == null)) {
        document.getElementById(el).innerHTML = '';
        return
    };
    var any_mastery = false;
    for (i = 0; i < dat.length; i++) {
        var spacer = '<span>';

        if (dat[i] < 10) {
            spacer = '<span class="">&nbsp;&nbsp;'
        }

        if (dat[i] == 0) {
            spacer = '<span class="nomastery">&nbsp;&nbsp;'
        } else {
            any_mastery = true;
        }

        text = text + spacer + dat[i] + ' ' + masteryNames[commander][i] + '<br></span>';

    }

    if (any_mastery) {
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
    }


    document.getElementById(el).innerHTML = text;
}

function fillicons(el, data) {
    var text = '';
    for (let [key, value] of Object.entries(data)) {
        if (key == 'outlaws') {
            for (i = 0; i < data['outlaws'].length; i++) {
                text = text + '<img src="Icons/' + data['outlaws'][i] + '.png">';
            }

        } else if ((['hfts', 'tus', 'propagators', 'voidrifts', 'turkey', 'voidreanimators', 'deadofnight', 'minesweeper'].includes(key)) && (value > 0)) {
            text = text + '<img src="Icons/' + key + '.png"> <span class="icontext">' + value + '</span>';

        } else if ((key == 'killbots') && (value > 0)) {
            text = text + '<img src="Icons/' + key + '.png"> <span class="icontext killbotkills">-' + value + '</span>';

        } else if (value > 0) {
            text = text + '<img src="Icons/' + key + '.png"> <span class="icontext iconcreated">+' + value + '</span>';
        }
    }
    document.getElementById(el).innerHTML = text
}

function fillunits(el, dat) {
    var text = '<span class="unitkills">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kills</span><span class="unitcreated">created</span><span class="unitdied">lost</span><br>';
    var percent = 0
    var spacer = ''
    var idx = 0
    if (dat == null) {
        return
    };
    for (let [key, value] of Object.entries(dat)) {
        idx += 1;
        if (idx === (maxUnits + 1)) {
            break
        };
        spacer = ''
        percent = Math.round(100 * value[3])
        if (percent < 10) {
            spacer = 'killpadding'
        } else if (percent == 100) {
            spacer = 'nokillpadding'
        };
        if (value[2] > -100) {
            text = text + key + ' <span class="unitkills ' + spacer + '">' + percent + '% | ' + value[2] + '</span>  <span class="unitcreated">' + value[0] + '</span>  <span class="unitdied">' + value[1] + '</span><br>'
        };
    }

    if (idx == 0) {
        text = '<span class="unitkills"></span>'
    }
    document.getElementById(el).innerHTML = text;
}