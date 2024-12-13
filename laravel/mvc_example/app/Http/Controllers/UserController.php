<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
class UserController extends Controller
{
    public function showUser()
    {
        $user = User::find(1); // Például az első felhasználó lekérése
        return view('user_view', ['user' => $user]);
    }
}