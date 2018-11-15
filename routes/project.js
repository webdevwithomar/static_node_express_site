const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
  res.redirect('project/0');
});

router.get('/:id', (req, res) => {
  res.render('project', {
    title: projects[req.params.id].project_name,
    description: projects[req.params.id].description,
    technologies: projects[req.params.id].technologies,
    live: projects[req.params.id].live_link,
    github: projects[req.params.id].github_link,
    image: projects[req.params.id].image_urls
  });
});

module.exports = router;