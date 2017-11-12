<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\cocomoBasic;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;


class ApiController extends Controller
{
    public function register(Request $request) {
      $validate = $request->validate([
       'name' => 'required|string|max:255',
       'email' => 'required|string|email|max:255|unique:users',
       'password' => 'required|string|min:6',
      ]);

      $user = User::create([
       'name' => $request->input('name'),
       'email' => $request->input('email'),
       'password' => bcrypt($request->input('password'))
      ]);
      $token = $user->createToken('login')->accessToken;
      return response()->json([
            'user' => $user,
            'token' => $token
        ], 200);
    }
 /**     
  * Sign in user and create a valid token
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
    public function userLogin(Request $request)
    {
     if (auth()->attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
      $user = auth()->user();
      $token = $user->createToken('login')->accessToken;
      return response()->json([
       'user' => $user,
       'token' => $token
      ], 200);
     }
     return $this->sendFailedLoginResponse($request);
    }
 /**
  * Logout a user and delete his oauth token
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
    public function logout(Request $request)
    {
     DB::table('oauth_access_tokens')->where('user_id', $request->get('id'))->delete();
     return response()->json(['message' => 'You are Logged out.'], 200);
    }
 /**
  * Get the failed login response instance.
  *
  * @param  \Illuminate\Http\Request $request
  * @return \Symfony\Component\HttpFoundation\Response
  *
  * @throws ValidationException
  */
   protected function sendFailedLoginResponse(Request $request)
   {
    throw ValidationException::withMessages([
     $this->username() => [trans('auth.failed')],
    ]);
   }
   /**
    * Get the login username to be used by the controller.
    *
    * @return string
    */
   public function username()
   {
    return 'email';
   }

   public function setCocomoUser(Request $request){
    $basic = json_encode($request['basic']);
    $interm = json_encode($request['interm']);
    $scale = json_encode($request['scale']);
    $effortPrevent = json_encode($request['effortPrevent']);
    $effortDeep = json_encode($request['effortDeep']);
    $cocomo2 = json_encode($request['cocomo2']);
    $user_id = $request['user'][0]['user_id'];
    if(!empty(DB::table('cocomo')->where('user_id', $user_id)->get()->toArray())){

      DB::table('cocomo')->where('user_id', $user_id)->update(['cocomoBasic' => $basic, 'cocomoIntermediate' => $interm, 'cocomoScaleFactors' => $scale, 'cocomoEffortDeep' => $effortDeep, 'cocomoEffortPrevent' => $effortPrevent, 'cocomo2size' => $cocomo2]);
      return response()->json([
       'message' => 'Data updated successfully'
      ], 200);

    }else {
      DB::table('cocomo')->insert(['cocomoBasic' => $basic, 'cocomoIntermediate' => $interm,'cocomoScaleFactors' => $scale, 'cocomoEffortDeep' => $effortDeep, 'cocomoEffortPrevent' => $effortPrevent, 'cocomo2size' => $cocomo2, 'user_id' => $user_id]);
      return response()->json([
        'message' => 'Data added successfully'
        ], 200);
   } 
  }
  public function getCocomoUser(Request $request) {
    $user_id = $request['user_id'];
    $data = DB::table('cocomo')->where('user_id', $user_id)->get();
    
    return response()->json([
       'message' => 'Data get successfully',
       'res' => $data
      ], 200);
  }
}
