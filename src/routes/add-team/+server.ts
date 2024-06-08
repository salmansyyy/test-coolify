import db from '$lib/server/database/drizzle';
import { teamTable } from '$lib/server/database/drizzle-schemas';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // return new Response();
    const teams = await db.select().from(teamTable);
    console.log(teams);

    // add a random team
    const newTeam = await db.insert(teamTable).values({
        id: '1',
        name: 'Team 1',
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log(newTeam);

    // get all teams again adn Return new Response
    const newTeams = await db.select().from(teamTable);

    return new Response(JSON.stringify(newTeams), {
        headers: {
            'content-type': 'application/json'
        }
    });
};