const { Collection } = require("discord.js");
const Participant = require("./participant");

module.exports = class League {

    /**
     * @typedef LeagueInfo
     * @property {String} name - the name of this league
     * @property {String} gameName - the name of the game played
     * @property {String} console - the console this league uses
     */

    /**
     * Will create a new league.
     * @param {LeagueInfo} leagueInfo - the league information
     * @param {Number} id - the id of this league
     */
    constructor(leagueInfo, id) {

        /**
         * The participants that are part of this league.
         * @type {Collection<String, Participant>} - <Student ID, Participant>
         */
        this.participants = new Collection();

        /**
         * The league information.
         * @type {LeagueInfo}
         */
        this.leagueInfo = this.verifyLeagueInfo(leagueInfo);

        /**
         * The schedule this league follows.
         * @type {TODO}
         */
        this.schedule; // TODO = new Schedule();

        /**
         * The ID of this league. Must be unique.
         * @type {Number}
         */
        this.id = id;
    }

    /**
     * Makes sure the league info has all the required information.
     * @param {LeagueInfo} leagueInfo - the league info to check
     * @throws Throws an error if any of the LeagueInfo objects are not given or are not strings.
     */
    verifyLeagueInfo(leagueInfo) {
        if (typeof leagueInfo != Object) throw new Error('The league info must be an object!');
        if (typeof leagueInfo?.console != String) throw new Error('The console must be given and must be a string!');
        if (typeof leagueInfo?.gameName != String) throw new Error('The game name must be given and must be a string!');
        if (typeof leagueInfo?.name != String) throw new Error('The league name must be given and must be a string!');
        return leagueInfo;
    }

}