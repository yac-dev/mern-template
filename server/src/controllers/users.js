import User from '../models/user';

export const getUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id).populate({ path: 'votes', model: 'Vote' });
    response.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
