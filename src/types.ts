import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http'

export type Response = FastifyReply<ServerResponse>