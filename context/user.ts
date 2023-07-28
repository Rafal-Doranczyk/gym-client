import { createServerContext } from 'react';
import { GetUserResponse } from 'gym-shared';

export const UserContext = createServerContext('user', {} as GetUserResponse);
