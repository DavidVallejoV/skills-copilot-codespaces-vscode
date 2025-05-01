function skillsMember() {
  return {
    name: 'skills',
    description: 'Skills to learn',
    type: 'object',
    properties: {
      skills: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    },
    required: ['skills']
  };
}