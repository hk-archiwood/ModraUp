// English copy for the shared screenshot gallery and feature panels.
const englishCopy = {
  screenshots: [
    {src:'assets/box-shadows.png', title:'Box & shadows', alt:'OpenSketch3D screenshot: a simple box with a ground shadow', description:'A simple solid and its ground shadow, showing basic modeling and shadow effects.'},
    {src:'assets/ruby-3d-text.png', title:'Scripted 3D text', alt:'OpenSketch3D screenshot: 3D lettering created through the Ruby console', description:'Create 3D lettering through the Ruby console to explore scripted geometry.'},
    {src:'assets/section-planes.png', title:'Section planes', alt:'OpenSketch3D screenshot: a section plane revealing internal model details', description:'Use section planes to inspect internal structures and construction details.'},
    {src:'assets/large-terrain.png', title:'Terrain model test', alt:'OpenSketch3D screenshot: a terrain model with shadows and performance information', description:'A terrain model operation test, with the original viewport performance information.'},
    {src:'assets/large-interior.png', title:'Interior model test', alt:'OpenSketch3D screenshot: a complex interior model with performance information', description:'A complex interior model operation test, showing scene detail and performance information.'}
  ],
  features: {
    modeling: {
      number:'01 / MODELING', title:['Draw a profile.','Give it depth.'],
      description:'Start with lines, rectangles and circles, then turn faces into solids with Push/Pull. Endpoint, midpoint and intersection snapping work with axis locking and numeric input to keep your ideas precise.',
      tags:['Drawing tools','Push/Pull & Offset','Move / Rotate / Scale','Follow Me'],
      heading:'Turn ideas into geometry',
      rows:[['R','Start with a profile','Lines, rectangles, circles, polygons and arcs.'],['P','Build volume','Extrude along a face normal, with set distances and repeat operations.'],['M','Refine the form','Move, rotate, scale, copy and create arrays.']],
      footer:'Inference snapping · Axis locking · Numeric input'
    },
    organize: {
      number:'02 / ORGANIZATION', title:['Complex models.','Clear structure.'],
      description:'Isolate geometry with groups and reuse definitions with components. Double-click to edit nested content. Groups remain independent, while instances of the same component share changes.',
      tags:['Nested editing','Reusable components','Component browser','Copy & paste'],
      heading:'Give every part its place',
      rows:[['G','Organize geometry','Group geometry and move, rotate or scale it together.'],['C','Reuse components','Instances of the same definition share edits.'],['↳','Edit nested content','Double-click to enter; press Esc to return to the parent context.']],
      footer:'Isolated groups · Shared definitions · Nested editing'
    },
    appearance: {
      number:'03 / EXPRESSION', title:['Your space.','Your expression.'],
      description:'Apply colors and textures, adjust edges and display styles, and set the time for sun shadows. Save views as scenes, look inside with section planes, and add annotations or 3D text.',
      tags:['Materials & textures','Edges & styles','Sun shadows','Sections & text'],
      heading:'Bring geometry to life',
      rows:[['C','Set materials','Colors, textures, opacity and viewport sampling.'],['L','Study shadows','Adjust the date and time to explore sun shadows.'],['S','Look inside','Section clipping and fills, with settings saved in the native format.']],
      footer:'Scene views · Section planes · Text annotations'
    },
    extend: {
      number:'04 / EXTENSIONS', title:['Your tools.','Your workflow.'],
      description:'Create and modify models with the Ruby API, explore automation in the console, and build extensions with toolbars and HTML interfaces. The API is evolving; existing plugins need individual compatibility checks.',
      tags:['Ruby console','Familiar API names','Custom toolbars','HTML interfaces'],
      heading:'Build tools for repeatable work',
      rows:[['rb','Work with models','Access models, entities, materials and components.'],['UI','Build interfaces','Menus, toolbars, HTML dialogs and trays.'],['⚙','Load extensions','Load Ruby extensions and verify their behavior individually.']],
      footer:'In development · SketchUp API coverage is incomplete'
    }
  }
};
