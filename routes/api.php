<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\ExternalReservationController;
use App\Http\Controllers\HandleTransferVisibilityTransfer;
use App\Http\Controllers\ReservationVisibilityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', [AuthController::class, "login"]);
Route::post('logout', [AuthController::class, "logout"]);
Route::post('refresh', [AuthController::class, "refresh"]);
Route::post('me', [AuthController::class, "me"]);
Route::get('/fill-data-pdfs', [\App\Http\Controllers\FillVoucherController::class, 'process']);
Route::post('/external-reservation', ExternalReservationController::class);

Route::put('/reservation/visibility/{reservation}', ReservationVisibilityController::class);
Route::put('/transfer/visibility/{transfer}', HandleTransferVisibilityTransfer::class);


Route::get('reservation/disabledDate', 'App\Http\Controllers\ReservationController@disabledDates');
Route::get('reservation/showFromToken', 'App\Http\Controllers\ReservationController@showFromToken');
Route::get('transfers/showFromToken', 'App\Http\Controllers\TransferController@showFromToken');

Route::apiResource('reservation/blockDate', 'App\Http\Controllers\BlockReservationDateController');
Route::apiResource('contact', 'App\Http\Controllers\ContactController');
Route::apiResource('feedback', 'App\Http\Controllers\FeedbackController');
Route::apiResource('reservation', 'App\Http\Controllers\ReservationController');
Route::apiResource('tours', 'App\Http\Controllers\TourController');
Route::apiResource('transfers', 'App\Http\Controllers\TransferController');

Route::apiResource('activity', 'App\Http\Controllers\ActivityController');
Route::apiResource('experiences', 'App\Http\Controllers\ExperienceController');
Route::apiResource('coupons', CouponController::class);
Route::apiResource('blogs', BlogController::class);
