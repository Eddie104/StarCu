package com.starcu;

import android.os.Build;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;

import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import com.umeng.analytics.MobclickAgent;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "StarCu";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RCTSplashScreen.openSplashScreen(this);   //open splashscreen
        //RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);   //open splashscreen fullscreen
        super.onCreate(savedInstanceState);
        // //透明状态栏  
        // if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
        //     setTranslucentStatus(true);
        // }
        MobclickAgent.setScenarioType(this, MobclickAgent.EScenarioType.E_DUM_NORMAL);
    }

    @Override
    protected void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }

    // //设置透明状态栏
    // private void setTranslucentStatus(boolean on) {
    //     Window win = getWindow();
    //     WindowManager.LayoutParams winParams = win.getAttributes();
    //     final int bits = WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS;
    //     if (on) {
    //         winParams.flags |= bits;
    //     } else {
    //         winParams.flags &= ~bits;
    //     }
    //     win.setAttributes(winParams);
    // }
}
