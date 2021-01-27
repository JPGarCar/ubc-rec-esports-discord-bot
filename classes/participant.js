const { Collection } = require("discord.js");
const Student = require("./student");

/**
 * Represents a league player, it must be part of a student. A student can be multiple participants.
 */
module.exports = class Participant {

    
    constructor(league, student) {

        /**
         * The league this participant is a part of.
         * @type {TODO}
         */
        this.league = league;

        /**
         * The student represented by this Participant.
         * @type {Student}
         */
        this.student = student;

        /**
         * The points the participants has.
         * @type {Number}
         */
        this.points = 0;

        /**
         * The games this participant is scheduled for or played.
         * @type {Collection<Number, TODO>} - <Game ID, Game>
         */
        this.games = new Collection();

    }

}