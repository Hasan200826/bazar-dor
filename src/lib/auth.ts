import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BRTTRT_AUTH_DB_URL!);
const db = client.db('bazar-dor-db-2');

export const auth = betterAuth({
  //...other options
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET as string, 
        },
        github:{
          clientId:process.env.GITHUB_CLIENT_ID as string,
          clientSecret:process.env.GITHUB_CLIENT_SECRETS as string,
        } 
    },
    account: {
		accountLinking: {
			trustedProviders: ["github", "google", "discord"], // add your providers here
		},
	},
  database: mongodbAdapter(db, {
    client,
  }),
});