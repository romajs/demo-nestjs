import { FastifyReply, FastifyRequest } from 'fastify';

import { ServerResponse } from 'http';

export type Request = FastifyRequest;
export type Response = FastifyReply<ServerResponse>;
