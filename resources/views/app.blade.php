<!DOCTYPE html>
<html>
  <head>
    <meta name="csrf-token" content="{{ csrf_token() }}">    
    <title>Laravel Vue App</title>
    @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
    @inertiaHead

  </head>
  <body>
    @inertia
    <div id="app"></div>
  </body>
</html>
