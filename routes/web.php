<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->name('profile');


Route::get('/listproducts', function () {
    return Inertia::render('List');
})->name('listproducts');


Route::get('/listcatalogs', function () {
    return Inertia::render('Catalogs');
})->name('listcatalogs');


Route::get('/searchproduct', function () {
    return Inertia::render('Search');
})->name('searchproduct');
