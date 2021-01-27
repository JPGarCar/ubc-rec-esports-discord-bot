const { GuildMember } = require("discord.js");

/**
 * Represents a UBC student, being part of the eSports league.
 */
module.exports = class Student {
    
    /**
     * Creates a new student object.
     * @param {String} name - the name of the student
     * @param {GuildMember} guildMember - the guild member the student is
     */
    constructor(name, guildMember) {
        /**
         * The student's name.
         * @type {String}
         */
        this.name = name;

        /**
         * The Discord Guild Member this student uses.
         * @type {GuildMember}
         */
        this.member = guildMember;

        /**
         * The id of this student, same as the GuildMember ID.
         * @type {String}
         */
        this.id = guildMember.id;

        /**
         * All the leagues this student is part of.
         * @type {[TODO]}
         */
        this.leagues = [];

        /**
         * The fun points this students holds.
         * @type {Number}
         */
        this.funPoints = 0;
    }

    /**
     * Adds fun points to this user.
     * @param {Number} points - the points to add
     */
    addFunPoints(points) {
        this.funPoints += points;
    }

    /**
     * Removes fun points from this user.
     * @param {Number} points - the points to remove
     */
    removeFunPoints(points) {
        this.funPoints -= points;
    }

    /**
     * Adds a league to the user.
     * @param {TODO} league 
     */
    joinLeague(league) {
        this.leagues.push(league);
    }

}