﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThunderApp.API.Models;

namespace ThunderApp.API.Interfaces
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
