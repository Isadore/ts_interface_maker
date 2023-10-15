interface newInterface {
    team: {
        /**
         * 12
         */
        id: string
        /**
         * s:20~l:28~t:12
         */
        uid: string
        /**
         * kansas-city-chiefs
         */
        slug: string
        /**
         * Kansas City
         */
        location: string
        /**
         * Chiefs
         */
        name: string
        /**
         * Chiefs
         */
        nickname: string
        /**
         * KC
         */
        abbreviation: string
        /**
         * Kansas City Chiefs
         */
        displayName: string
        /**
         * Chiefs
         */
        shortDisplayName: string
        /**
         * e31837
         */
        color: string
        /**
         * ffb612
         */
        alternateColor: string
        /**
         * true
         */
        isActive: boolean
        logos: {
            /**
             * https://a.espncdn.com/i/teamlogos/nfl/500/kc.png
             */
            href: string;
            /**
             * 500
             */
            width: number;
            /**
             * 500
             */
            height: number;
            alt: string;
            rel: {}[] | string;
            /**
             * 2018-06-05T12:11Z
             */
            lastUpdated: string;
        }[];
        record: {
            items: {
                /**
                 * Home Record
                 */
                description?: string;
                /**
                 * total
                 */
                type: string;
                /**
                 * 5-1
                 */
                summary: string;
                stats: {
                    /**
                     * OTLosses
                     */
                    name: string;
                    value: number;
                }[];
            }[];
        }
        athletes: {
            hand?: {
                /**
                 * LEFT
                 */
                type: string;
                /**
                 * L
                 */
                abbreviation: string;
                /**
                 * Left
                 */
                displayValue: string;
            };
            /**
             * 3115922
             */
            id: string;
            /**
             * s:20~l:28~a:3115922
             */
            uid: string;
            /**
             * 1d6b8b5c-a9a4-e6b4-0e7d-3e0647da6016
             */
            guid: string;
            /**
             * football
             */
            type: string;
            alternateIds: {
                /**
                 * 3115922
                 */
                sdr: string;
            };
            /**
             * Nick
             */
            firstName: string;
            /**
             * Allegretti
             */
            lastName: string;
            /**
             * Nick Allegretti
             */
            fullName: string;
            /**
             * Nick Allegretti
             */
            displayName: string;
            /**
             * N. Allegretti
             */
            shortName: string;
            /**
             * 310
             */
            weight: number;
            /**
             * 310 lbs
             */
            displayWeight: string;
            /**
             * 76
             */
            height: number;
            /**
             * 6' 4"
             */
            displayHeight: string;
            /**
             * 27
             */
            age: number;
            /**
             * 1996-04-21T07:00Z
             */
            dateOfBirth: string;
            /**
             * 2019
             */
            debutYear?: number;
            links: {
                /**
                 * en-US
                 */
                language: string;
                rel: {}[] | string;
                /**
                 * http://www.espn.com/nfl/player/_/id/3115922/nick-allegretti
                 */
                href: string;
                /**
                 * Player Card
                 */
                text: string;
                /**
                 * Player Card
                 */
                shortText: string;
                isExternal: boolean;
                isPremium: boolean;
            }[];
            birthPlace: {
                /**
                 * Frankfort
                 */
                city: string;
                /**
                 * IL
                 */
                state?: string;
                /**
                 * USA
                 */
                country: string;
            };
            college?: {};
            /**
             * nick-allegretti
             */
            slug: string;
            headshot: {
                /**
                 * https://a.espncdn.com/i/headshots/nfl/players/full/3115922.png
                 */
                href: string;
                /**
                 * Nick Allegretti
                 */
                alt: string;
            };
            /**
             * 73
             */
            jersey?: string;
            position: {
                parent?: {};
                /**
                 * 73
                 */
                id: string;
                /**
                 * Guard
                 */
                name: string;
                /**
                 * Guard
                 */
                displayName: string;
                /**
                 * G
                 */
                abbreviation: string;
                leaf: boolean;
            };
            injuries: {
                /**
                 * -1423632
                 */
                id: string;
                /**
                 * inactive
                 */
                longComment: string;
                /**
                 * inactive
                 */
                shortComment: string;
                /**
                 * Out
                 */
                status: string;
                /**
                 * 2023-10-12T22:52Z
                 */
                date: string;
                athlete: {};
                source: {
                    /**
                     * 1
                     */
                    id: string;
                    /**
                     * basic/manual
                     */
                    description: string;
                    /**
                     * basic
                     */
                    state: string;
                };
                type: {
                    /**
                     * 4
                     */
                    id: string;
                    /**
                     * INJURY_STATUS_OUT
                     */
                    name: string;
                    /**
                     * out
                     */
                    description: string;
                    /**
                     * O
                     */
                    abbreviation: string;
                };
                details: {
                    fantasyStatus: {
                        /**
                         * inactive
                         */
                        description: string;
                        /**
                         * INACTIVE
                         */
                        abbreviation: string;
                    };
                    /**
                     * Coach's Decision
                     */
                    type: string;
                    /**
                     * Other
                     */
                    location: string;
                    /**
                     * Not Specified
                     */
                    detail: string;
                    /**
                     * Not Specified
                     */
                    side: string;
                    /**
                     * 2023-10-22
                     */
                    returnDate: string;
                };
            }[];
            /**
             * true
             */
            linked: boolean;
            teams?: {}[];
            projections?: {};
            experience: {
                /**
                 * 5
                 */
                years: number;
            };
            collegeAthlete?: {};
            /**
             * true
             */
            active: boolean;
            eventLog: {};
            draft?: {
                pick?: {};
                /**
                 * Year: 2019 Round: 7 Pick: 216
                 */
                displayText: string;
                /**
                 * 7
                 */
                round: number;
                /**
                 * 2019
                 */
                year: number;
                /**
                 * 216
                 */
                selection: number;
            };
            status: {
                /**
                 * 1
                 */
                id: string;
                /**
                 * Active
                 */
                name: string;
                /**
                 * active
                 */
                type: string;
                /**
                 * Active
                 */
                abbreviation: string;
            };
        }[];
        groups: {
            /**
             * 6
             */
            id: string
            parent: {
                /**
                 * 8
                 */
                id: string
            }
            /**
             * false
             */
            isConference: boolean
        }
        links: {
            /**
             * en-US
             */
            language: string;
            rel: {}[] | string;
            /**
             * https://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs
             */
            href: string;
            /**
             * Clubhouse
             */
            text: string;
            /**
             * Clubhouse
             */
            shortText: string;
            isExternal: boolean;
            isPremium: boolean;
        }[];
        franchise: {
            /**
             * http://sports.core.api.espn.pvt/v2/sports/football/leagues/nfl/franchises/12?lang=en&region=us
             */
            $ref: string
            /**
             * 12
             */
            id: string
            /**
             * s:20~l:28~f:12
             */
            uid: string
            /**
             * kansas-city-chiefs
             */
            slug: string
            /**
             * Kansas City
             */
            location: string
            /**
             * Chiefs
             */
            name: string
            /**
             * Chiefs
             */
            nickname: string
            /**
             * KC
             */
            abbreviation: string
            /**
             * Kansas City Chiefs
             */
            displayName: string
            /**
             * Chiefs
             */
            shortDisplayName: string
            /**
             * e31837
             */
            color: string
            /**
             * true
             */
            isActive: boolean
            venue: {
                /**
                 * http://sports.core.api.espn.pvt/v2/sports/football/leagues/nfl/venues/3622?lang=en&region=us
                 */
                $ref: string
                /**
                 * 3622
                 */
                id: string
                /**
                 * GEHA Field at Arrowhead Stadium
                 */
                fullName: string
                address: {
                    /**
                     * Kansas City
                     */
                    city: string
                    /**
                     * MO
                     */
                    state: string
                    /**
                     * 64129
                     */
                    zipCode: string
                }
                /**
                 * 73426
                 */
                capacity: number
                /**
                 * true
                 */
                grass: boolean
                /**
                 * false
                 */
                indoor: boolean
                images: {
                    /**
                     * https://a.espncdn.com/i/venues/nfl/day/3622.jpg
                     */
                    href: string;
                    /**
                     * 2000
                     */
                    width: number;
                    /**
                     * 1125
                     */
                    height: number;
                    alt: string;
                    rel: {}[] | string;
                }[];
            }
            team: {
                /**
                 * http://sports.core.api.espn.pvt/v2/sports/football/leagues/nfl/seasons/2023/teams/12?lang=en&region=us
                 */
                $ref: string
            }
        }
        nextEvent: {
            /**
             * 401547469
             */
            id: string;
            /**
             * 2023-10-13T00:15Z
             */
            date: string;
            /**
             * Denver Broncos at Kansas City Chiefs
             */
            name: string;
            /**
             * DEN @ KC
             */
            shortName: string;
            season: {
                /**
                 * 2023
                 */
                year: number;
                /**
                 * 2023
                 */
                displayName: string;
            };
            seasonType: {
                /**
                 * 2
                 */
                id: string;
                /**
                 * 2
                 */
                type: number;
                /**
                 * Regular Season
                 */
                name: string;
                /**
                 * reg
                 */
                abbreviation: string;
            };
            week: {
                /**
                 * 6
                 */
                number: number;
                /**
                 * Week 6
                 */
                text: string;
            };
            /**
             * true
             */
            timeValid: boolean;
            competitions: {
                /**
                 * 401547469
                 */
                id: string;
                /**
                 * 2023-10-13T00:15Z
                 */
                date: string;
                /**
                 * 73528
                 */
                attendance: number;
                type: {
                    /**
                     * 1
                     */
                    id: string;
                    /**
                     * Standard
                     */
                    text: string;
                    /**
                     * STD
                     */
                    abbreviation: string;
                    /**
                     * standard
                     */
                    slug: string;
                    /**
                     * standard
                     */
                    type: string;
                };
                /**
                 * true
                 */
                timeValid: boolean;
                neutralSite: boolean;
                /**
                 * true
                 */
                boxscoreAvailable: boolean;
                ticketsAvailable: boolean;
                venue: {
                    /**
                     * GEHA Field at Arrowhead Stadium
                     */
                    fullName: string;
                    address: {
                        /**
                         * Kansas City
                         */
                        city: string;
                        /**
                         * MO
                         */
                        state: string;
                        /**
                         * 64129
                         */
                        zipCode: string;
                    };
                };
                competitors: {
                    /**
                     * 12
                     */
                    id: string;
                    /**
                     * team
                     */
                    type: string;
                    order: number;
                    /**
                     * home
                     */
                    homeAway: string;
                    /**
                     * true
                     */
                    winner: boolean;
                    team: {
                        /**
                         * 12
                         */
                        id: string;
                        /**
                         * Kansas City
                         */
                        location: string;
                        /**
                         * Chiefs
                         */
                        nickname: string;
                        /**
                         * KC
                         */
                        abbreviation: string;
                        /**
                         * Kansas City Chiefs
                         */
                        displayName: string;
                        /**
                         * Chiefs
                         */
                        shortDisplayName: string;
                        logos: {
                            /**
                             * https://a.espncdn.com/i/teamlogos/nfl/500/kc.png
                             */
                            href: string;
                            /**
                             * 500
                             */
                            width: number;
                            /**
                             * 500
                             */
                            height: number;
                            alt: string;
                            rel: {}[] | string;
                            /**
                             * 2018-06-05T12:11Z
                             */
                            lastUpdated: string;
                        }[];
                        links: {
                            rel: {}[] | string;
                            /**
                             * https://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs
                             */
                            href: string;
                            /**
                             * Clubhouse
                             */
                            text: string;
                        }[];
                    };
                    score: {
                        /**
                         * 19
                         */
                        value: number;
                        /**
                         * 19
                         */
                        displayValue: string;
                    };
                    leaders?: {
                        /**
                         * passingLeader
                         */
                        name: string;
                        /**
                         * Passing Leader
                         */
                        displayName: string;
                        /**
                         * PYDS
                         */
                        abbreviation: string;
                        leaders?: {
                            /**
                             * 30-40, 306 YDS, 1 TD, 1 INT
                             */
                            displayValue: string;
                            /**
                             * 306
                             */
                            value: number;
                            athlete: {
                                /**
                                 * 3139477
                                 */
                                id: string;
                                /**
                                 * Mahomes
                                 */
                                lastName: string;
                                /**
                                 * Patrick Mahomes
                                 */
                                displayName: string;
                                /**
                                 * P. Mahomes
                                 */
                                shortName: string;
                                links: {
                                    rel: {}[] | string;
                                    /**
                                     * http://www.espn.com/nfl/player/_/id/3139477/patrick-mahomes
                                     */
                                    href: string;
                                }[];
                            };
                        }[];
                    }[];
                    record: {
                        /**
                         * 369
                         */
                        id: string;
                        /**
                         * Game
                         */
                        abbreviation?: string;
                        /**
                         * Record Year To Date
                         */
                        displayName: string;
                        /**
                         * YTD
                         */
                        shortDisplayName: string;
                        /**
                         * Overall Record
                         */
                        description: string;
                        /**
                         * total
                         */
                        type: string;
                        /**
                         * 5-1
                         */
                        displayValue: string;
                    }[];
                }[];
                notes: {}[];
                broadcasts: {
                    type: {
                        /**
                         * 4
                         */
                        id: string;
                        /**
                         * Web
                         */
                        shortName: string;
                    };
                    market: {
                        /**
                         * 1
                         */
                        id: string;
                        /**
                         * National
                         */
                        type: string;
                    };
                    media: {
                        /**
                         * PRIME VIDEO
                         */
                        shortName: string;
                    };
                    /**
                     * en
                     */
                    lang: string;
                    /**
                     * us
                     */
                    region: string;
                }[];
                status: {
                    clock: number;
                    /**
                     * 0:00
                     */
                    displayClock: string;
                    /**
                     * 4
                     */
                    period: number;
                    type: {
                        /**
                         * 3
                         */
                        id: string;
                        /**
                         * STATUS_FINAL
                         */
                        name: string;
                        /**
                         * post
                         */
                        state: string;
                        /**
                         * true
                         */
                        completed: boolean;
                        /**
                         * Final
                         */
                        description: string;
                        /**
                         * Final
                         */
                        detail: string;
                        /**
                         * Final
                         */
                        shortDetail: string;
                    };
                };
            }[];
            links: {
                /**
                 * en-US
                 */
                language: string;
                rel: {}[] | string;
                /**
                 * https://www.espn.com/nfl/game/_/gameId/401547469
                 */
                href: string;
                /**
                 * Gamecast
                 */
                text: string;
                /**
                 * Summary
                 */
                shortText: string;
                isExternal: boolean;
                isPremium: boolean;
            }[];
        }[];
        /**
         * 1st in AFC West
         */
        standingSummary: string
    }
}