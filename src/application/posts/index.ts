import { Dependencies } from '@infrastructure/di';
import { makeCreatePostCommand } from './commands/create-post';
import { makeDeletePostCommand } from './commands/delete-post';

export function makePosts(dependencies: Dependencies) {
  return {
    commands: {
      createPost: makeCreatePostCommand(dependencies),
      deletePost: makeDeletePostCommand(dependencies),
    },
  };
}
