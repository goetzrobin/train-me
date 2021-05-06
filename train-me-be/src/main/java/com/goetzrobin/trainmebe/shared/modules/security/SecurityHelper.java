package com.goetzrobin.trainmebe.shared.modules.security;

import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityHelper {
    private SecurityHelper() {}
    public static Long getCurrentUserSysId() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user.getUserSysId();
    }
}
